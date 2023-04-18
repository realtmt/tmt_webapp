import { motion } from "framer-motion"
import { cloneElement } from "react"

interface Props {
    onClick: () => void
    loading?: boolean
    text: string
    icon: React.ReactNode
}

const Button: React.FC<Props> = ({ onClick, loading = false, text, icon }) => {
    return (
        <button
            onClick={() => onClick()}
            className="w-[200px] lg:w-[300px] h-[50px] lg:h-[75px] cursor-pointer disabled:cursor-wait flex flex-col border border-light disabled:border-light/30 transition-all group overflow-hidden shadow-md shadow-light/50 disabled:shadow-dark/50"
            disabled={loading}
        >
            <span className="flex justify-end items-center h-full w-full transition-all flex-shrink-0">
                <span className="w-[124px] lg:w-[186px] flex-shrink-0  flex justify-center items-center h-full capitalize text-[24px] lg:text-[36px] group-disabled:text-light/30 text-light/90 transition-all overflow-hidden duration-300 ease-out whitespace-nowrap">
                    {loading ? (
                        text
                    ) : (
                        <span className="w-full h-full transition  ease-[cubic-bezier(0.86,0,0.7,1)] duration-400 relative group-hover:bg-light">
                            <span className="text-light bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 absolute group-hover:bottom-[200%] transition-all ease-[cubic-bezier(0.86,0,0.7,1)] duration-400 delay-0">
                                {text}
                            </span>
                            <span className="text-dark group-hover:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute top-[200%] transition-all ease-[cubic-bezier(0.86,0,0.7,1)] duration-400 delay-0">
                                {text}
                            </span>
                        </span>
                    )}
                </span>

                <span
                    className={`w-full flex justify-center items-center border-l group-hover:border-dark group-disabled:group-hover:border-light/30 border-light group-disabled:border-light/30 transition-all h-full `}
                >
                    {loading ? (
                        <svg
                            className="w-6 lg:w-[36px] h-6 lg:h-[36px] animate-spin text-light/20 fill-light/60"
                            viewBox="0 0 100 101"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                    ) : (
                        <span className="w-full h-full transition ease-[cubic-bezier(0.86,0,0.7,1)] duration-400 relative group-hover:bg-light">
                            {cloneElement(icon as any, {
                                className:
                                    "w-6 lg:w-[36px] h-6 lg:h-[36px] text-light bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 absolute group-hover:bottom-[200%] transition-all ease-[cubic-bezier(0.86,0,0.7,1)] duration-400 delay-0",
                            })}
                            {cloneElement(icon as any, {
                                className:
                                    "w-6 lg:w-[36px] h-6 lg:h-[36px] text-dark group-hover:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute top-[200%] transition-all ease-[cubic-bezier(0.86,0,0.7,1)] duration-400 delay-0",
                            })}
                        </span>
                    )}
                </span>
            </span>
        </button>
    )
}

export default Button
