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

    return (<div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-3 gap-6">
            {items.map(item => (
                <div className="border border-gray-200 rounded-xl flex content-center md:items-center items-start shadow-sm" key={item.title}>
                    <img src={item.image} alt={item.title} className={`md:rounded-l-xl md:w-40 w-20 rounded-tl-xl`}/>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
                        <p className="text-gray-500">{item.description}</p>
                    </div>

                </div>
            ))}
        </div>
    </div>)
}

export default Encompasses;