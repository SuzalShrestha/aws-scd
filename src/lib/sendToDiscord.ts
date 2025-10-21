"use server";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendToDiscord(data: FormData) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                embeds: [
                    {
                        title: "New Form Message",
                        url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
                        color: 0x00ff00,
                        fields: [
                            { name: "Full Name", value: data.name, inline: false },
                            { name: "Email", value: data.email, inline: false },
                            { name: "Subject", value: data.subject, inline: false },
                            { name: "Message", value: data.message, inline: false },
                        ],
                        timestamp: new Date().toISOString(),
                    },
                ],
            }),
        });
        return { success: true, sent: data };
    } catch (error) {
        console.error("Error sending to Discord:", error);
        return { success: false, error: "Failed to send message" };
    }
}
