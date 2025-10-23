'use client';

import React, { useState } from 'react';
import ExpertDetailModal from './ExpertDetailModal';

interface Expert {
    id: string;
    name: string;
    title: string;
    specialization: string;
    image: string;
    currentPosition: string;
    qualifications: string[];
    experience: string;
    sectors: string[];
    achievements: string[];
    quote: string;
    email?: string;
    linkedin?: string;
    services: string[]; // الخدمات التي يقدمها الخبير
}

const ExpertsSectionWithFilter = () => {
    const [selectedService, setSelectedService] = useState<string>('all');
    const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // تعريف الخدمات المتاحة
    const services = [
        { id: 'all', name: 'جميع الخدمات', icon: '🌟', color: 'bg-purple-100 text-purple-800' },
        { id: 'research', name: 'الأبحاث والدراسات', icon: '🧾', color: 'bg-blue-100 text-blue-800' },
        { id: 'training', name: 'التدريب والتطوير', icon: '🎓', color: 'bg-green-100 text-green-800' },
        { id: 'business', name: 'تطوير الأعمال', icon: '💼', color: 'bg-orange-100 text-orange-800' },
        { id: 'hr', name: 'التوظيف والكفاءات', icon: '👥', color: 'bg-pink-100 text-pink-800' },
        { id: 'digital', name: 'التعليم الرقمي', icon: '💡', color: 'bg-indigo-100 text-indigo-800' }
    ];

    const experts: Expert[] = [
        {
            id: '1',
            name: 'د. محمد عواد',
            title: 'خبير تطوير مؤسسي',
            specialization: 'التدريب والتطوير',
            image: '/person.jpg',
            currentPosition: 'الخبير الرئيس في خدمة التدريب والتطوير',
            qualifications: [
                'دكتوراه في إدارة الأعمال - جامعة القدس',
                'ماجستير في التطوير المؤسسي - جامعة النجاح',
                'بكالوريوس في إدارة الأعمال - جامعة بيرزيت'
            ],
            experience: 'أكثر من 20 عامًا في تنفيذ مشاريع التطوير المؤسسي والتعليم الرقمي في فلسطين والمنطقة، مع خبرة واسعة في بناء القدرات والتخطيط الاستراتيجي للمؤسسات الفلسطينية.',
            sectors: ['التعليم', 'الصحة', 'القطاع الخاص', 'المنظمات الدولية'],
            achievements: [
                'إعداد 12 دراسة تنموية لصالح جهات مانحة',
                'تصميم 5 برامج تدريب وطنية',
                'قيادة مشروع رقمنة المدارس في شمال فلسطين'
            ],
            quote: 'أؤمن أن التطوير يبدأ من الإنسان، والتقنية هي وسيلته نحو التغيير.',
            email: 'm.awad@al-nourgroup.com',
            linkedin: 'https://linkedin.com/in/mohammed-awad',
            services: ['training', 'research', 'business']
        },
        {
            id: '2',
            name: 'م. ليلى عبد الله',
            title: 'خبيرة التعليم الرقمي',
            specialization: 'التعليم الرقمي',
            image: '/person.jpg',
            currentPosition: 'الخبيرة الرئيسية في خدمة التعليم الرقمي',
            qualifications: [
                'ماجستير في تكنولوجيا التعليم - الجامعة الإسلامية',
                'بكالوريوس في علوم الحاسوب - جامعة القدس المفتوحة'
            ],
            experience: 'أكثر من 15 عامًا في تطوير منصات التعليم الإلكتروني وتصميم المحتوى الرقمي، مع خبرة ميدانية في تطبيق التقنيات الحديثة في البيئة التعليمية الفلسطينية.',
            sectors: ['التعليم', 'التكنولوجيا', 'التدريب المهني'],
            achievements: [
                'قادت تطوير محتوى منصة "تعلم! مدرستي في جوالي"',
                'تصميم 3 مناهج رقمية للمدارس الفلسطينية',
                'تدريب أكثر من 500 معلم على التقنيات التعليمية'
            ],
            quote: 'التعليم الرقمي ليس رفاهية، بل ضرورة في عصر التحول الرقمي.',
            email: 'l.abdullah@al-nourgroup.com',
            linkedin: 'https://linkedin.com/in/layla-abdullah',
            services: ['digital', 'training']
        },
        {
            id: '3',
            name: 'د. أحمد السعدي',
            title: 'خبير الأبحاث الاقتصادية',
            specialization: 'الأبحاث والدراسات',
            image: '/person.jpg',
            currentPosition: 'الخبير الرئيس في خدمة الأبحاث والدراسات',
            qualifications: [
                'دكتوراه في الاقتصاد - جامعة القاهرة',
                'ماجستير في الإحصاء التطبيقي - جامعة عين شمس'
            ],
            experience: 'أكثر من 18 عامًا في مجال الأبحاث الاقتصادية والتنموية، مع تركيز على تحليل السياسات ودراسات الجدوى وتقييم الأثر في السياق الفلسطيني.',
            sectors: ['القطاع الاقتصادي', 'التنمية المستدامة', 'التمويل والاستثمار'],
            achievements: [
                'إعداد 25 دراسة جدوى اقتصادية لمشاريع استثمارية',
                'تحليل تأثير السياسات الاقتصادية على 100 مؤسسة',
                'نشر 10 أوراق بحثية في مجلات محكمة'
            ],
            quote: 'البيانات هي الوقود الذي يحرك عملية صنع القرار المستنير.',
            email: 'a.alsaadi@al-nourgroup.com',
            linkedin: 'https://linkedin.com/in/ahmed-alsaadi',
            services: ['research', 'business']
        },
        {
            id: '4',
            name: 'أ. سامي رشيد',
            title: 'خبير تطوير الأعمال',
            specialization: 'تطوير الأعمال',
            image: '/person.jpg',
            currentPosition: 'الخبير الرئيس في خدمة تطوير الأعمال',
            qualifications: [
                'ماجستير في إدارة الأعمال - جامعة بوليتكنك فلسطين',
                'بكالوريوس في التسويق - جامعة بيت لحم'
            ],
            experience: 'أكثر من 12 عامًا في استشارات تطوير الأعمال والتحول الرقمي للمؤسسات، مع خبرة في تصميم نماذج العمل وتحسين العمليات.',
            sectors: ['القطاع الخاص', 'الشركات الناشئة', 'الاستثمار'],
            achievements: [
                'مساعدة 50 شركة على التحول الرقمي',
                'تطوير استراتيجيات نمو لـ 30 مؤسسة',
                'قيادة مشاريع اندماج واستحواذ بقيمة 20 مليون دولار'
            ],
            quote: 'النمو المستدام يبدأ بفهم عميق لاحتياجات السوق وإمكانيات المؤسسة.',
            email: 's.rashid@al-nourgroup.com',
            linkedin: 'https://linkedin.com/in/sami-rashid',
            services: ['business', 'research']
        },
        {
            id: '5',
            name: 'د. هناء قاسم',
            title: 'خبيرة التوظيف والموارد البشرية',
            specialization: 'التوظيف والكفاءات',
            image: '/person.jpg',
            currentPosition: 'الخبيرة الرئيسية في خدمة التوظيف والكفاءات',
            qualifications: [
                'دكتوراه في إدارة الموارد البشرية - جامعة الأزهر',
                'ماجستير في علم النفس التنظيمي - جامعة النجاح'
            ],
            experience: 'أكثر من 14 عامًا في مجال إدارة المواهب والموارد البشرية، مع خبرة في تصميم أنظمة التوظيف وتطوير الكفاءات وتحليل سوق العمل.',
            sectors: ['الموارد البشرية', 'التوظيف', 'التدريب', 'القطاع المصرفي'],
            achievements: [
                'إدارة عمليات توظيف لأكثر من 1000 موظف',
                'تصميم 8 برامج تطوير كفاءات للمؤسسات',
                'إعداد دراسات سوق العمل لـ 15 قطاعًا مختلفًا'
            ],
            quote: 'الاستثمار في المواهب هو أعلى أنواع الاستثمار عائدًا.',
            email: 'h.qasem@al-nourgroup.com',
            linkedin: 'https://linkedin.com/in/hanaa-qasem',
            services: ['hr', 'training']
        },
        {
            id: '6',
            name: 'م. ياسر ناصر',
            title: 'خبير تقنيات التعليم',
            specialization: 'التعليم الرقمي',
            image: '/person.jpg',
            currentPosition: 'الخبير الرئيس في خدمة التعليم الرقمي',
            qualifications: [
                'ماجستير في هندسة البرمجيات - جامعة القدس',
                'بكالوريوس في علم الحاسوب - جامعة بيرزيت'
            ],
            experience: 'أكثر من 10 أعوام في تطوير حلول التعليم الرقمي وتقنيات التعليم، مع خبرة في تصميم الأنظمة التقنية وإدارة المشاريع التكنولوجية.',
            sectors: ['التعليم', 'التكنولوجيا', 'البرمجيات'],
            achievements: [
                'تطوير 5 منصات تعليمية إلكترونية',
                'قيادة مشاريع رقمنة لـ 100 مدرسة',
                'تصميم أنظمة إدارة التعلم للمؤسسات التعليمية'
            ],
            quote: 'التقنية وسيلة لتحقيق التعلم الفعال، وليست غاية في حد ذاتها.',
            email: 'y.nasser@al-nourgroup.com',
            linkedin: 'https://linkedin.com/in/yasser-nasser',
            services: ['digital', 'research']
        }
    ];

    // تصفية الخبراء حسب الخدمة المختارة
    const filteredExperts = selectedService === 'all'
        ? experts
        : experts.filter(expert => expert.services.includes(selectedService));

    const handleExpertClick = (expert: Expert) => {
        setSelectedExpert(expert);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedExpert(null);
    };

    const getServiceIcon = (serviceId: string) => {
        return services.find(s => s.id === serviceId)?.icon || '🌟';
    };

    const getServiceColor = (serviceId: string) => {
        return services.find(s => s.id === serviceId)?.color || 'bg-gray-100 text-gray-800';
    };

    return (
        <>
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
                        فريق الخبراء في مجموعة النور
                    </h2>
                    <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        تعرف على فريقنا من الخبراء المتخصصين في مختلف المجالات. كل خبير يمتلك خبرة فريدة
                        ومسارًا مهنيًا متميزًا لخدمة أهدافك وتحقيق تطلعاتك.
                    </p>

                    {/* نظام التصفية */}
                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-center text-gray-700 mb-6">
                            اختر الخدمة لعرض الخبراء المتخصصين:
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {services.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setSelectedService(service.id)}
                                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${selectedService === service.id
                                            ? `${service.color} ring-2 ring-offset-2 ring-blue-500 scale-105`
                                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="text-lg">{service.icon}</span>
                                    <span>{service.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* إحصائيات التصفية */}
                        <div className="text-center mb-8">
                            <p className="text-gray-600">
                                عرض <span className="font-bold text-blue-600">{filteredExperts.length}</span> خبير
                                {selectedService !== 'all' && (
                                    <> في <span className="font-bold text-gold-600">
                                        {services.find(s => s.id === selectedService)?.name}
                                    </span></>
                                )}
                            </p>
                        </div>
                    </div>

                    {/* شبكة الخبراء */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredExperts.map((expert) => (
                            <div
                                key={expert.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                                onClick={() => handleExpertClick(expert)}
                            >
                                <div className="p-6">
                                    {/* صورة ومعلومات أساسية */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src={expert.image}
                                            alt={expert.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-gold-500"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg text-blue-900">{expert.name}</h3>
                                            <p className="text-gold-600 text-sm">{expert.title}</p>
                                            <p className="text-gray-500 text-xs">{expert.specialization}</p>
                                        </div>
                                    </div>

                                    {/* الخدمات التي يقدمها */}
                                    <div className="mb-4">
                                        <p className="text-gray-600 text-sm mb-2 font-semibold">الخدمات:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {expert.services.map((serviceId) => (
                                                <span
                                                    key={serviceId}
                                                    className={`text-xs px-2 py-1 rounded-full ${getServiceColor(serviceId)}`}
                                                >
                                                    {getServiceIcon(serviceId)} {services.find(s => s.id === serviceId)?.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* الوظيفة الحالية */}
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {expert.currentPosition}
                                    </p>
                                </div>

                                {/* القطاعات */}
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {expert.sectors.slice(0, 2).map((sector, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                                        >
                                            {sector}
                                        </span>
                                    ))}
                                    {expert.sectors.length > 2 && (
                                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                            +{expert.sectors.length - 2}
                                        </span>
                                    )}
                                </div>

                                {/* زر عرض الملف الشخصي */}
                                <button className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 py-2 rounded-lg text-sm font-semibold transition duration-300 flex items-center justify-center gap-2">
                                    <span>عرض الملف الشخصي</span>
                                    <span>→</span>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* رسالة إذا لم توجد نتائج */}
                    {filteredExperts.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-700 mb-2">لا توجد نتائج</h3>
                            <p className="text-gray-600">
                                لا يوجد خبراء متخصصين في هذه الخدمة حالياً.
                                <br />
                                يمكنك اختيار خدمة أخرى أو التواصل معنا للاستفسار عن الخبراء المتاحين.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* المودال */}
            {selectedExpert && (
                <ExpertDetailModal
                    expert={selectedExpert}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};

export default ExpertsSectionWithFilter;