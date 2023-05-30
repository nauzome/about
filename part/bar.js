import Link from "next/link";
export default function Bar() {
    return (
        <header class="header">
            <p class="header_box">
                <Link class="header_link" href="/assets.7z">assets</Link>
                <span></span>
                <Link class="header_link" href="https://about.nauzome.com">onion..</Link>
                <span></span>
                <Link class="link" href="mailto:nauzome@nauzome.com">Mail</Link>
            </p>
        </header>
    );
}