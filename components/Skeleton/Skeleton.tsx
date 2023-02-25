import clsxm from "@/lib/clsxm"

import { WithClassName } from "@/types"

type SkeletonProps = WithClassName

const Skeleton = (props: SkeletonProps) => {
	const { className } = props

	return (
		<div
			className={clsxm(
				"h-6 w-[650px] animate-pulse rounded bg-zinc-200 dark:bg-zinc-800",
				className
			)}
		/>
	)
}

export default Skeleton
