import React from 'react';
import { FaMapMarkerAlt, FaRoad } from 'react-icons/fa';
import { GiTempleGate, GiMountainRoad } from 'react-icons/gi';

const TouristAttractions = () => {
    const temples = [
        {
            name: 'Tirumala Tirupati Devasthanams',
            description: 'One of the most visited pilgrimage sites in the world, famous for Lord Venkateswara temple. A spiritual journey that attracts millions of devotees annually.',
            distance: '75 km from Chittoor',
            image: '/C:/Users/sanda/.gemini/antigravity/brain/bde1ba5b-d28f-483f-b7eb-28eb5caab5d3/tirupati_temple_1765637292098.png'
        },
        {
            name: 'Kanipakam Vinayaka Temple',
            description: 'Ancient temple dedicated to Lord Ganesha, known for its self-manifested idol that continues to grow. A must-visit for devotees seeking blessings.',
            distance: '45 km from Chittoor',
            image: '/C:/Users/sanda/.gemini/antigravity/brain/bde1ba5b-d28f-483f-b7eb-28eb5caab5d3/kanipakam_temple_1765637309236.png'
        },
        {
            name: 'Ardhagiri Anjaneya Swamy Temple',
            description: 'Hilltop temple featuring a massive Hanuman statue, offering panoramic views of the surrounding landscape. Perfect for spiritual seekers and nature lovers.',
            distance: '8 km from Chittoor',
            image: '/C:/Users/sanda/.gemini/antigravity/brain/bde1ba5b-d28f-483f-b7eb-28eb5caab5d3/ardhagiri_temple_1765637327518.png'
        },
        {
            name: 'Golden Temple Vellore',
            description: 'Magnificent temple covered in gold, dedicated to Goddess Lakshmi. Known for its stunning architecture and serene spiritual atmosphere.',
            distance: '85 km from Chittoor',
            image: '/C:/Users/sanda/.gemini/antigravity/brain/bde1ba5b-d28f-483f-b7eb-28eb5caab5d3/golden_temple_vellore_1765637348842.png'
        },
        {
            name: 'Subramanya Swamy Temple Chittoor',
            description: 'Historic temple with beautiful top view architecture, dedicated to Lord Subramanya. A peaceful place for worship and meditation in the heart of Chittoor.',
            distance: 'In Chittoor City',
            image: '/C:/Users/sanda/.gemini/antigravity/brain/bde1ba5b-d28f-483f-b7eb-28eb5caab5d3/subramanya_temple_1765637366614.png'
        },
        {
            name: 'ISKCON Tirupati',
            description: 'Modern temple complex with beautiful gardens and spiritual programs. Experience Krishna consciousness in a peaceful and welcoming environment.',
            distance: '70 km from Chittoor',
            image: '/C:/Users/sanda/.gemini/antigravity/brain/bde1ba5b-d28f-483f-b7eb-28eb5caab5d3/iskcon_tirupati_1765637387846.png'
        }
    ];

    const touristPlaces = [
        {
            name: 'Puligundu Rock',
            description: 'Unique rock formation offering breathtaking views of the surrounding valleys. A popular spot for trekking and photography enthusiasts.',
            distance: '12 km from Chittoor',
            image: '/C:/Users/sanda/.gemini/antigravity/brain/bde1ba5b-d28f-483f-b7eb-28eb5caab5d3/puligundu_rock_1765637412749.png'
        },
        {
            name: 'Thalakona Waterfalls',
            description: 'The highest waterfall in Andhra Pradesh, cascading from 270 feet. Surrounded by dense forest, perfect for nature lovers and adventure seekers.',
            distance: '55 km from Chittoor',
            image: '/C:/Users/sanda/.gemini/antigravity/brain/bde1ba5b-d28f-483f-b7eb-28eb5caab5d3/thalakona_waterfalls_1765637433596.png'
        },
        {
            name: 'Mamandur Waterfalls',
            description: 'Serene waterfall nestled in lush greenery, ideal for a peaceful day trip. A hidden gem offering tranquility away from the crowds.',
            distance: '48 km from Chittoor',
            image: '/C:/Users/sanda/.gemini/antigravity/brain/bde1ba5b-d28f-483f-b7eb-28eb5caab5d3/mamandur_waterfalls_1765637453042.png'
        },
        {
            name: 'Kaigal Waterfalls',
            description: 'Multi-tiered waterfall with trekking trails through scenic landscapes. Best visited during monsoon for the full spectacular experience.',
            distance: '60 km from Chittoor',
            image: '/C:/Users/sanda/.gemini/antigravity/brain/bde1ba5b-d28f-483f-b7eb-28eb5caab5d3/kaigal_waterfalls_1765637469908.png'
        },
        {
            name: 'Chandragiri Fort',
            description: 'Historic 11th-century fort with Indo-Saracenic architecture. Explore ancient palaces, museums, and enjoy panoramic views from the hilltop.',
            distance: '65 km from Chittoor',
            image: '/C:/Users/sanda/.gemini/antigravity/brain/bde1ba5b-d28f-483f-b7eb-28eb5caab5d3/chandragiri_fort_1765637487781.png'
        },
        {
            name: 'Blueland Waterpark Tirupati',
            description: 'Fun-filled waterpark with exciting slides and wave pools. Perfect family destination for a day of entertainment and relaxation.',
            distance: '72 km from Chittoor',
            image: '/C:/Users/sanda/.gemini/antigravity/brain/bde1ba5b-d28f-483f-b7eb-28eb5caab5d3/blueland_waterpark_1765637508438.png'
        }
    ];

    const AttractionCard = ({ attraction, icon }) => (
        <div className="card hover-lift overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    {icon}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{attraction.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{attraction.description}</p>
                <div className="flex items-center text-primary-600 font-semibold">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{attraction.distance}</span>
                </div>
            </div>
        </div>
    );

    return (
        <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 mt-20">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-semibold text-sm mb-4">
                        Explore Nearby
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Tourist Attractions
                        <span className="gradient-text"> Near Chittoor</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover the spiritual heritage and natural beauty around Chittoor.
                        Rent a bike and explore these amazing destinations at your own pace.
                    </p>
                </div>

                {/* Temples Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <GiTempleGate className="text-4xl text-primary-600" />
                        <h2 className="text-3xl font-bold text-gray-900">Temples Nearby Chittoor</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {temples.map((temple, index) => (
                            <AttractionCard
                                key={index}
                                attraction={temple}
                                icon={<GiTempleGate className="text-2xl text-primary-600" />}
                            />
                        ))}
                    </div>
                </div>

                {/* Tourist Places Section */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <GiMountainRoad className="text-4xl text-accent-600" />
                        <h2 className="text-3xl font-bold text-gray-900">Tourist Places Nearby Chittoor</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {touristPlaces.map((place, index) => (
                            <AttractionCard
                                key={index}
                                attraction={place}
                                icon={<GiMountainRoad className="text-2xl text-accent-600" />}
                            />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-center text-white">
                    <h3 className="text-3xl font-bold mb-4">Ready to Explore?</h3>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Rent a bike from us and visit these amazing places at your convenience.
                        Flexible plans and affordable rates!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/7032160046?text=Hi!%20I%20would%20like%20to%20rent%20a%20bike%20for%20sightseeing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg"
                        >
                            Book a Bike Now
                        </a>
                        <a
                            href="/"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-xl transition-all duration-300"
                        >
                            View All Bikes
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TouristAttractions;
