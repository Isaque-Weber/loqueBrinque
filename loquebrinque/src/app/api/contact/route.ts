import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactData {
    name: string;
    email: string;
    phone: string;
    message: string;
}
// exemplo: string com o SVG
function emailTemplateInterno({ name, email, phone, message }: ContactData) {
    return `
  <div style="font-family: Arial, sans-serif; background:#f0f9ff; padding:20px; border-radius:12px;">
    <div style="text-align:center; margin-bottom:20px;">
      <img src="https://loquebrinque.vercel.app/Logo.png" 
     alt="Loque Brinque" 
     width="180" 
     style="margin:auto;display:block;" />
    </div>
    <h2 style="color:#0284c7; text-align:center;">📩 Novo contato recebido</h2>
    <p><b>Nome:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Telefone:</b> ${phone}</p>
    <p><b>Mensagem:</b><br/> ${message}</p>
    <hr style="margin:20px 0;" />
    <p style="font-size:13px; color:#555;">Este email foi enviado automaticamente pelo site.</p>
  </div>
  `;
}

function emailTemplateCliente({ name }: {name: string;}) {
    return `
  <div style="font-family: Arial, sans-serif; background:#fff7ed; padding:20px; border-radius:12px;">
    <div style="text-align:center; margin-bottom:20px;">
      <img src="https://loquebrinque.vercel.app/Logo.png" 
     alt="Loque Brinque" 
     width="180" 
     style="margin:auto;display:block;" />
    </div>
    <h2 style="color:#f97316; text-align:center;">🎉 Olá, ${name}!</h2>
    <p>Recebemos sua mensagem e em breve nossa equipe entrará em contato com você.</p>
    <p>Enquanto isso, sinta-se à vontade para explorar nossos brinquedos no site ou falar conosco diretamente no WhatsApp.</p>
    <div style="text-align:center; margin:20px 0;">
      <a href="https://wa.me/5521964485810?text=Olá! Gostaria de mais informações sobre os brinquedos 🎪"
        style="background:#22c55e; color:white; padding:12px 20px; border-radius:999px; text-decoration:none; font-weight:bold;">
        💬 Falar no WhatsApp
      </a>
    </div>
    <p style="font-size:13px; color:#555; text-align:center;">Equipe Loque Brinque</p>
  </div>
  `;
}

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { ok: false, error: "Campos obrigatórios faltando" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email interno (para você/equipe)
        await transporter.sendMail({
            from: `"Site Loque Brinque" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER, // ou outro email da equipe
            replyTo: email,
            subject: "📩 Novo contato pelo site",
            html: emailTemplateInterno({ name, email, phone, message }),
        });

        // Email automático para o cliente
        await transporter.sendMail({
            from: `"Equipe Loque Brinque" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "🎪 Recebemos sua mensagem - Loque Brinque",
            html: emailTemplateCliente({ name }),
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Erro ao enviar email:", err);
        return NextResponse.json(
            { ok: false, error: "Erro interno ao enviar email" },
            { status: 500 }
        );
    }
}
