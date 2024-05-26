import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <div>
            <p>Welcome to MTG DECK CREATOR</p>
            <p>
              Search cards, add them to favorites, create a deck and print it to
              be ready for your next tournament.
            </p>
          </div>
          <div>
            <button>
              <Link href="/login">Login</Link>
            </button>
            <p>or </p>
            <button>
              <Link href="/signin">Signin</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
