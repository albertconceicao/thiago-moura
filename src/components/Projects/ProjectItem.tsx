import Image from 'next/image';
import { ProjectContainer } from './styles';
import Link from 'next/link';

interface ProjectsProps {
  title: string;
  text: string;
  path: string;
  img: string;
  width: number;
  height: number;
}

export function ProjectItem({ title, text, path, img, width, height }: ProjectsProps) {
  return (
    <ProjectContainer>
        <div>
            <Image src={img} alt="title" width={width} height={height}/>
        </div>
        <div>
           <h3>{title}</h3> 
            <p>{text}</p>

            <Link className="standard" href={`/projects${path}`}>Ver projeto</Link>
        </div>
    </ProjectContainer>
  );
}
