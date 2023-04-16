import { motion, Variants } from "framer-motion"
interface Props {
    text: string
}

const itemVariants: Variants = {
    hidden: {
        opacity: 1,
        y: "100%",
    },
    visible: {
        opacity: 1,
        y: "15%",
        transition: {
            type: "spring",
            mass: 0.2,
            damping: 12,
            stiffness: 150,
        },
    },
    exit: {
        opacity: 1,
        y: "100%",
        transition: {
            duration: 0.1,
        },
    },
}

const OrchestrateTextUp: React.FC<Props> = ({ text }) => {
    return (
        <span className="overflow-hidden flex">
            {text.split("").map((c, i) => (
                <motion.span variants={itemVariants} key={i} className="block">
                    {c}
                </motion.span>
            ))}
        </span>
    )
}

export default OrchestrateTextUp
