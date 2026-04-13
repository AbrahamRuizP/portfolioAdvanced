// Label.tsx
import { motion } from "framer-motion";
import { revealLabel } from "../data/reveal";

type Props = {
    title: string
}

export const Label = ({ title }: Props) => {
    return (
        <motion.p className="section-label" {...revealLabel}>
            {title}
        </motion.p>
    )
}