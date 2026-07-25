import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const address = searchParams.get("address");

    if (!address) {
        return NextResponse.json(
        { error: "Dirección requerida" },
        { status: 400 }
        );
    }

    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
        )}`,
        {
        headers: {
            "User-Agent": "Regionerate/1.0",
        },
        }
    );

    const data = await response.json();

    return NextResponse.json(data);
}