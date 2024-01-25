import GithubIcon from "~~/public/socials/github.svg";
// import LinkedInIcon from "~~/public/socials/linkedin.svg";
import TelegramIcon from "~~/public/socials/telegram.svg";
import TwitterIcon from "~~/public/socials/twitter.svg";
import { useGlobalState } from "~~/services/store/store";

interface ISocialLinksProps {
  isButtonStyle?: boolean;
}

export const SocialLinks = ({ isButtonStyle }: ISocialLinksProps) => {
  const ensRecords = useGlobalState(state => state.ensRecords);

  const classNames = `w-14 h-14 inline-block p-2 mr-3 ${
    isButtonStyle ? "rounded-full text-base-300 bg-primary hover:bg-accent" : ""
  }  "`;

  const socialsArray = [
    ensRecords?.twitterUsername && {
      url: `https://twitter.com/${ensRecords.twitterUsername}`,
      icon: <TwitterIcon alt="Twitter icon" />,
      id: "twitter",
    },
    ensRecords?.githubUsername && {
      url: `https://github.com/${ensRecords.githubUsername}`,
      icon: <GithubIcon alt="GitHub icon" />,
      id: "github",
    },
    ensRecords?.telegramUsername && {
      url: `https://t.me/${ensRecords.telegramUsername}`,
      icon: <TelegramIcon alt="Telegram icon" />,
      id: "telegram",
    },
  ].filter(Boolean); // This removes any falsy entries from the array, such as those where the username is undefined

  return (
    <>
      {socialsArray.map(({ url, icon, id }) => (
        <a key={id} href={url} className={classNames} target="_blank" rel="noreferrer">
          {icon}
        </a>
      ))}
    </>
  );
};
