// import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";
import client from "@/lib/client";


async function getUser() {
    const session = await getSession();
    if (session.id) {
        const user = await client!.user.findUnique({
            where: {
                id: session.id,
            },
        });
        if (user) {
            return user;
        }
    }
    notFound();
}

export default async function Profile() {
    const user = await getUser();
    const logOut = async () => {
        "use server";
        const session = await getSession();
        await session.destroy();
        redirect("/");
    };
    return (
        <div>
            <h1>Welcome! {user?.name}!</h1>
            <form action={logOut}>
                <button>Log out</button>
            </form>
        </div>
    );}