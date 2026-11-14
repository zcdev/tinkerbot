type Props = {
    skills: string[] | undefined;
};

export default function PillList({ skills }: Props) {
    return (
        <ul>
            {skills && skills.map(skill =>
                <li key={skill} className="w-fit rounded-full bg-slate-100 mb-6 px-4 py-2 text-md font-medium text-black">
                    {skill}
                </li>
            )}
        </ul>
    );
}