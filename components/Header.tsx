import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next";

export const Header = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  console.log(router);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: 20,
        backgroundColor: "cyan",
        color: "#111",
        fontWeight: "bold",
      }}
    >
      <Link href="/">
        <p>Home</p>
      </Link>

      <div>
        {router.locales?.map((lng) => {
          return (
            <Link key={lng} href={router.basePath} locale={lng}>
              <span
                style={{
                  textDecoration: lng === i18n.language ? "underline" : "none",
                  padding: 5,
                }}
              >
                {lng.toUpperCase()}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}