import { css } from "hono/css";
import { Wrapper } from "../Wrapper";

export function HoncathonSponsors() {
  return (
    <Wrapper narrow>
      <div class={sponsorFlexClass}>
        <a
          href="http://orm.drizzle.team"
          target="_blank"
          rel="noopener noreferrer"
          title="Drizzle ORM"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="221"
            height="123"
            viewBox="0 0 221 123"
            fill="none"
            role="img"
            aria-label="Sponsor logo: Drizzle ORM"
          >
            <path
              d="M48.8909 51.9589C52.1228 53.9784 53.1056 58.2355 51.0861 61.4673L16.3481 117.06C14.3286 120.292 10.0715 121.274 6.83967 119.255C3.60779 117.235 2.62496 112.978 4.64446 109.746L39.3824 54.1541C41.4019 50.9222 45.659 49.9394 48.8909 51.9589Z"
              fill="currentColor"
            />
            <path
              d="M117.891 3.65663C121.123 5.67613 122.106 9.93321 120.086 13.1651L85.3481 68.7575C83.3286 71.9893 79.0715 72.9722 75.8397 70.9527C72.6078 68.9332 71.625 64.6761 73.6445 61.4442L108.382 5.85183C110.402 2.61995 114.659 1.63713 117.891 3.65663Z"
              fill="currentColor"
            />
            <path
              d="M214.492 3.65663C217.724 5.67613 218.707 9.93321 216.688 13.1651L181.95 68.7575C179.93 71.9893 175.673 72.9722 172.441 70.9527C169.209 68.9332 168.227 64.6761 170.246 61.4442L204.984 5.85183C207.003 2.61995 211.261 1.63713 214.492 3.65663Z"
              fill="currentColor"
            />
            <path
              d="M145.492 51.9589C148.724 53.9784 149.707 58.2355 147.688 61.4673L112.95 117.06C110.93 120.292 106.673 121.274 103.441 119.255C100.209 117.235 99.2265 112.978 101.246 109.746L135.984 54.1541C138.003 50.9222 142.261 49.9394 145.492 51.9589Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          href="http://neon.tech"
          target="_blank"
          rel="noopener noreferrer"
          title="Neon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="123"
            viewBox="0 0 124 123"
            fill="none"
            role="img"
            aria-label="Sponsor logo: Neon"
          >
            <path
              d="M0.34375 21.192C0.34375 9.488 9.83175 0 21.5358 0H102.063C113.767 0 123.255 9.488 123.255 21.192V89.6812C123.255 101.788 107.932 107.042 100.503 97.4861L77.2694 67.598V103.84C77.2694 114.373 68.7307 122.912 58.1976 122.912H21.5358C9.83175 122.912 0.34375 113.424 0.34375 101.72V21.192ZM21.5358 16.955C19.1936 16.955 17.2987 18.8499 17.2987 21.1886V101.72C17.2987 104.062 19.1936 105.96 21.5324 105.96H58.8327C60.0037 105.96 60.3144 105.011 60.3144 103.84V55.242C60.3144 43.1318 75.6374 37.8773 83.0702 47.4371L106.304 77.3217V21.192C106.304 18.8499 106.522 16.955 104.184 16.955H21.5358Z"
              fill="currentColor"
            />
            <path
              d="M102.061 0C113.765 0 123.253 9.488 123.253 21.192V89.6812C123.253 101.788 107.93 107.042 100.501 97.4861L77.2671 67.598V103.84C77.2671 114.373 68.7284 122.912 58.1953 122.912C58.7567 122.912 59.2951 122.689 59.6921 122.292C60.0891 121.895 60.3121 121.356 60.3121 120.795V55.242C60.3121 43.1318 75.6351 37.8773 83.0679 47.4371L106.302 77.3217V4.23704C106.302 1.8983 104.403 0 102.061 0Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          href="http://cloudflare.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Cloudflare"
        >
          <svg
            width="273"
            height="123"
            viewBox="0 0 273 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Sponsor logo: Cloudflare"
          >
            <path
              d="M215.067 52.4349L209.429 50.1802C182.932 109.801 77.5209 73.5545 71.1782 91.2909C70.1209 103.272 128.743 93.569 170.652 95.5997C183.432 96.2186 189.841 105.866 184.414 121.591L195.103 121.624C207.433 83.1859 246.782 102.802 248.426 90.1168C245.725 81.7762 203.203 90.1168 215.067 52.4349Z"
              fill="currentColor"
            />
            <path
              d="M187.443 115.018C189.134 109.38 188.571 103.742 185.752 100.359C182.933 96.9759 178.986 94.7212 173.912 94.1575L75.8084 93.0291C75.2447 93.0291 74.6811 92.4654 74.1174 92.4654C73.5537 91.9017 73.5537 91.338 74.1174 90.7743C74.6811 89.6469 75.2447 89.0822 76.3721 89.0822L175.039 87.9548C186.88 87.3912 199.284 77.8064 203.793 66.5306L209.432 51.8716C209.432 51.3069 209.996 50.7432 209.432 50.1795C203.23 21.4253 177.295 0 146.848 0C118.658 0 94.4142 18.0421 85.9569 43.4143C80.319 39.4674 73.5537 37.2116 65.66 37.7764C52.1284 38.9037 41.4163 50.1795 39.7242 63.7111C39.1605 67.0943 39.7242 70.4775 40.2889 73.8596C18.2999 74.4232 0.257812 92.4654 0.257812 115.018C0.257812 117.273 0.257812 118.965 0.821496 121.22C0.821496 122.348 1.94886 122.912 2.51361 122.912H183.496C184.624 122.912 185.752 122.348 185.752 121.22L187.443 115.018Z"
              fill="#4C413B"
            />
            <path
              d="M218.454 51.8711H215.634C215.071 51.8711 214.507 52.4348 213.943 52.9985L209.996 66.5301C208.305 72.168 208.869 77.8069 211.689 81.189C214.507 84.5722 218.454 86.8269 223.528 87.3917L244.39 88.519C244.953 88.519 245.517 89.0827 246.081 89.0827C246.644 89.6464 246.644 90.2101 246.081 90.7738C245.517 91.9022 244.953 92.4659 243.825 92.4659L222.401 93.5932C210.56 94.1569 198.157 103.742 193.646 115.017L192.518 120.093C191.954 120.656 192.518 121.784 193.646 121.784H268.07C269.197 121.784 269.761 121.22 269.761 120.093C270.888 115.582 272.015 110.508 272.015 105.433C272.015 76.1148 247.772 51.8711 218.454 51.8711Z"
              fill="#4C413B"
            />
          </svg>
        </a>

        <a
          href="http://fiberplane.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Fiberplane"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="123"
            height="122"
            viewBox="0 0 123 122"
            fill="none"
            role="img"
            aria-label="Sponsor logo: Fiberplane"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M61.0156 122H61.0157C87.7455 122 102.605 122 112.31 112.295C122.016 102.589 122.016 87.7299 122.016 61.0001V61V60.9999C122.016 34.2701 122.016 19.4106 112.31 9.70531C102.605 0 87.7455 0 61.0156 0C34.2858 0 19.4263 0 9.72093 9.70531C0.015625 19.4106 0.015625 34.2701 0.015625 61C0.015625 87.7299 0.015625 102.589 9.72093 112.295C19.4263 122 34.2857 122 61.0156 122H61.0156ZM29.1749 51.8726V60.9724L64.4059 61.0446L66.4845 51.9448L29.1749 51.8726ZM29.1749 42.7366V33.6367L63.1376 33.709C66.9778 33.709 69.7962 37.3922 68.9155 41.22L68.5631 42.8088L29.1749 42.7366ZM60.2134 79.2367L62.2902 70.145L83.3848 70.1811L86.6612 61.0812L64.36 61.0451L62.2833 70.1368L29.1749 70.0646V79.1645L60.2134 79.2367ZM68.5685 42.8431L66.4547 51.9429L96.6124 51.7985L100.347 42.7347L68.5685 42.8431ZM66.9988 88.373H73.446L77.0044 79.237H60.1639C58.9661 83.8231 62.3483 88.373 66.9988 88.373Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </Wrapper>
  );
}

const sponsorFlexClass = css`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  margin-block: 5rem;

  a {
    color: white;

    svg {
      filter: drop-shadow(
        0 0 var(--spacing-shadow-length)
          hsl(from var(--color-bg-primary) h s l / 0.7)
      );
      transition: 0.2s;

      &:hover {
        --spacing-shadow-length: 20px;
      }
    }
  }
`;
