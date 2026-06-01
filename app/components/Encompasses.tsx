const Encompasses: React.FC = () => {

    const items = [
        {
            title: 'Groundwater exploration and assessment',
            description: 'Our team of experts can help you locate and assess groundwater sources, ensuring you have access to a reliable and sustainable water supply.',
            image: 'https://res.cloudinary.com/ddpqwwzwe/image/upload/v1741691107/groundwater-exploration-and-assessment_emgjwk.jpg'
        },
        {
            title: 'Site selection for tube well installation',
            description: 'We can help you choose the best location for your tube well, ensuring you have access to clean and safe water for your home or business.',
            image: 'https://res.cloudinary.com/ddpqwwzwe/image/upload/v1741691107/site-selection-for-tube-well-installation_g3pizj.jpg'
        },
        {
            title: 'Hydro-geological surveys and mapping',
            description: 'Our team can conduct hydro-geological surveys and mapping to help you better understand the water resources in your area and how best to manage them.',
            image: 'https://res.cloudinary.com/ddpqwwzwe/image/upload/v1741691107/hydro-geological-surveys-and-mapping_mjtt8s.jpg'
        },
        {
            title: 'Water resource management',
            description: 'We can help you manage your water resources more effectively, ensuring you have access to clean and safe water when you need it most.',
            image: 'https://res.cloudinary.com/ddpqwwzwe/image/upload/v1741691107/water-resource-management_pcewpg.jpg'
        },
        {
            title: 'Providing solutions for sustainable water access',
            description: 'We are committed to providing sustainable water access solutions that meet the needs of our clients and protect the environment.',
            image: 'https://res.cloudinary.com/ddpqwwzwe/image/upload/v1741691107/providing-solutions-for-sustainable-water-access_mg8ltk.jpg'
        },
        {
            title: 'Groundwater quality testing and contamination assessment',
            description: 'We can help you test the quality of your groundwater and assess any contamination issues, ensuring you have access to clean and safe water.',
            image: 'https://res.cloudinary.com/ddpqwwzwe/image/upload/v1741691951/groundwater_qality-testing-and_-contamination-assessment_kfahpi.jpg'
        }

    ];

    return (<section>
        <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-extrabold text-foreground karla-font md:text-4xl">What GeoNeeds encompasses</h2>
            <p className="text-lg leading-8 text-foreground/65">Practical hydrogeology, construction support, and water-resource guidance for dependable site decisions.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {items.map(item => (
                <div className="flex items-start overflow-hidden rounded-geo border border-line bg-surface shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-sky-950/10 md:items-center" key={item.title}>
                    <img src={item.image} alt={item.title} className="h-28 w-28 shrink-0 object-cover md:h-40 md:w-44"/>
                    <div className="p-5">
                        <h3 className="mb-3 text-xl font-bold leading-tight text-foreground karla-font">{item.title}</h3>
                        <p className="leading-7 text-foreground/65">{item.description}</p>
                    </div>

                </div>
            ))}
        </div>
    </section>)
}

export default Encompasses;
