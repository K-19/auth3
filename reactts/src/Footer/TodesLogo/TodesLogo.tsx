import React from 'react'

interface IProps {
    width: string;
    height: string;
}

const Icon: React.FC<IProps> = ({width, height}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            version="1.1"
            viewBox="0 0 100 100"
        >
            <g>
                <path
                    fill="#1b1918"
                    fillRule="evenodd"
                    strokeWidth="2.393"
                    d="M70.827 88.468l1.925-14.249h1.818L72.955 86.21h4.752l-.404 2.258zm10.515 0h-1.818l1.508-11.862h-2.518l.297-2.387h7.08l-.403 2.387h-2.53zm3.836 0l1.818-14.249h2.436c.7 0 1.01 0 1.212.115.498 0 .7 0 1.01.317.404.115.606.33.902.647.202.431.404.862.511 1.308.297.431.297.963.498 1.51v2.156c0 1.395-.201 2.804-.498 3.983-.31 1.193-.807 2.171-1.319 2.818-.498.431-1.104.963-1.71 1.179-.403.216-.915.216-1.723.216zm2.127-2.258h1.01c.606 0 1.117-.115 1.414-.115.31-.215.511-.532.713-.862.498-.432.7-1.194.902-2.056.31-.964.512-1.941.512-3.12 0-.978-.108-1.726-.404-2.272-.108-.431-.404-.863-.808-1.078-.202-.1-.404-.1-1.01-.1h-1.023z"
                />
                <path
                    fill="#1b1918"
                    fillRule="evenodd"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeWidth="0.294"
                    d="M8.62 12.327h31.45v24.304h49.657v24.312H40.07v9.69h26.481l-4.962 22.692H11.925V60.943H8.62V36.631h3.305v-3.265H8.62z"
                />
                <path
                    fill="#9c9e9f"
                    fillRule="evenodd"
                    stroke="#9c9e9f"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeWidth="1.488"
                    d="M13.591 8.555h31.463v24.276h49.58v24.363h-49.58v9.737H71.53l-4.988 22.66H16.873V57.194h-3.282V32.831h3.282v-3.275h-3.282z"
                />
                <path
                    fill="none"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeWidth="0.588"
                    d="M46.58 8.955h48.293v22.301V8.955v22.301"
                />
                <path
                    fill="none"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeWidth="0.588"
                    d="M95.075 60.603V93.31h-3.46"
                />
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="0.517"
                    d="M23.638 40.088c-3.518.24-5.678.665-5.93.771-1.03.532-1.18 1.17-1.206 2.127.076.877.352 1.648 1.307 2.1.176.08 2.311.585 5.829.824v5.609c0 1.648.577 2.924 1.306 2.924h3.241c.729 0 1.306-1.276 1.306-2.924v-5.423l50.751.026c6.532 0 10.527-.345 11.281-.584 1.357-.479 1.784-1.542 1.784-2.366.05-.878-.377-2.366-1.81-2.552-.602-.053-4.873-.691-11.23-.691l-50.776-.027V38.68c0-1.648-.577-2.924-1.306-2.924h-3.241c-.729 0-1.306 1.276-1.306 2.924z"
                />
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="0.517"
                    d="M52.757 42.322v-4.333c0-.93.613-1.648 1.386-1.648h3.437c.773 0 1.385.718 1.385 1.648V52.13a2.85 2.85 0 01-2.85 2.844H48.92c-1.545 0-2.824-1.276-2.824-2.844V45.14a2.822 2.822 0 012.824-2.818z"
                />
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="0.517"
                    d="M31.362 44.811v6.992q0 2.844 2.851 2.844h7.194q2.85 0 2.85-2.844V44.81q0-2.844-2.85-2.844h-7.194q-2.85 0-2.85 2.844z"
                />
                <path
                    fill="#9c9e9f"
                    fillRule="evenodd"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="0.517"
                    d="M36.045 46.767v3.35q0 .717.72.717h1.678q.719 0 .719-.718v-3.349q0-.718-.72-.718h-1.678q-.72 0-.72.718z"
                />
                <path
                    fill="#9c9e9f"
                    fillRule="evenodd"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="0.517"
                    d="M50.091 46.235v3.349q0 .718.72.718h1.678q.72 0 .72-.718v-3.35q0-.717-.72-.717h-1.678q-.72 0-.72.718z"
                />
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="0.517"
                    d="M60.961 44.989v6.991q0 2.844 2.851 2.844h7.193q2.851 0 2.851-2.844v-6.991q0-2.844-2.85-2.844h-7.194q-2.851 0-2.851 2.844z"
                />
                <path
                    fill="none"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="0.517"
                    d="M73.837 46.404h-7.646"
                />
                <path
                    fill="none"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="0.517"
                    d="M73.837 50.309h-7.646"
                />
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="0.517"
                    d="M75.844 44.989v6.991q0 2.844 2.851 2.844h7.193q2.851 0 2.851-2.844v-6.991q0-2.844-2.85-2.844h-7.194q-2.851 0-2.851 2.844z"
                />
                <path
                    fill="none"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="0.517"
                    d="M88.72 46.404h-7.646"
                />
                <path
                    fill="none"
                    stroke="#1b1918"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="0.517"
                    d="M83.704 50.131h-7.647"
                />
            </g>
        </svg>
    );
}

export default Icon;