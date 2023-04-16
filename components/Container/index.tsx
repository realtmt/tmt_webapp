interface Props {
    children: React.ReactNode
    className?: string
}

const Container: React.FC<Props> = ({ children, className = "" }) => {
    return (
        <section
            className={`grid grid-cols-5 grid-rows-5 gap-[20px] ${className}`}
        >
            {children}
        </section>
    )
}

export default Container
