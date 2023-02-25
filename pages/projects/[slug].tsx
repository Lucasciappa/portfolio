import { useRouter } from 'next/router';
import Link from 'next/link';

import NotFound from '../404';

import { PROJECTS } from '@/config/links';

const Project = () => {
	const projects = PROJECTS;

	const router = useRouter();
	const { slug } = router.query;

	const project = projects.find(p => p.slug == slug);

	if (!project) {
		return <NotFound />
	}

	return (
		<>
			<div className='space-y-5 my-[60px]'>
				<div className='flex items-center gap-3'>
					<div className='flex flex-col'>
						<div className='text-2xl font-bold'>{project.name}</div>
						<div className="text-accent-5 text-[15px]">{project.description}</div>
					</div>
				</div>
				<div className='flex flex-col items-start gap-2 sm:flex-row sm:gap-4'>
					<Link href={project.websiteUrl} target="_blank" className='flex items-center text-accent-5 transition-colors duration-300 hover:text-portfolio-fg'>
						Home Page
					</Link>
					<Link href={project.githubUrl} target="_blank" className='flex items-center text-accent-5 transition-colors duration-300 hover:text-portfolio-fg'>
						Github Repo
					</Link>
				</div>
			</div>
		</>
	);
};

export default Project;
