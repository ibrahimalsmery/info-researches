'use client';

import React, { useState } from 'react';
import ExpertsSection from './ExpretsSection';
import BlogSection from './BlogSection';
import ExpertsSectionWithFilter from './ExpertsSectionWithFilter';
const ResearchStudiesPage = () => {
    const [selectedSector, setSelectedSector] = useState<string>('all');
    const [selectedService, setSelectedService] = useState<string | null>(null);
    // بيانات الخدمات
    const researchServices = [
        {
            id: 'baseline',
            title: 'إعداد دراسات خط الأساس',
            description: 'جمع وتحليل بيانات لتحديد الوضع الحالي للمشاريع والبرامج.',
            icon: '📊'
        },
        {
            id: 'feasibility',
            title: 'دراسات الجدوى الاقتصادية والفنية',
            description: 'تقييم شامل لجدوى المشاريع من الجوانب الاقتصادية والفنية.',
            icon: '💰'
        },
        {
            id: 'needs',
            title: 'دراسات تقييم الاحتياجات',
            description: 'مساعدة المؤسسات على تحديد أولوياتها واستراتيجياتها.',
            icon: '🎯'
        },
        {
            id: 'market',
            title: 'دراسات السوق',
            description: 'تحليل الاتجاهات والمنافسة وسلوك المستهلك لدعم القرارات التسويقية.',
            icon: '📈'
        },
        {
            id: 'field',
            title: 'الأبحاث الميدانية والمسحية',
            description: 'جمع بيانات كمية ونوعية لدعم اتخاذ القرار.',
            icon: '🔍'
        },
        {
            id: 'risk',
            title: 'دراسات تقييم المخاطر',
            description: 'تحديد وتحليل وإدارة المخاطر المحتملة.',
            icon: '⚠️'
        },
        {
            id: 'policy',
            title: 'أوراق الحقائق والموقف',
            description: 'إعداد تقارير مختصرة ومرجعية تدعم صناع القرار.',
            icon: '📄'
        }
    ];

    // بيانات القطاعات
    const sectors = [
        {
            category: 'القطاعات الاقتصادية والتنموية',
            items: [
                'الأنشطة التجارية والخدمية',
                'القطاع الصناعي',
                'القطاع الزراعي والثروة الحيوانية والسمكية',
                'قطاع الطاقة والكهرباء',
                'قطاع المصارف والتأمين والأوراق المالية'
            ],
            color: 'bg-green-100 border-green-300',
            icon: '🏢'
        },
        {
            category: 'قطاعات البنية التحتية والخدمات',
            items: [
                'قطاع الإنشاءات والبناء',
                'قطاع النقل والمواصلات',
                'قطاع الموارد المائية والصرف الصحي',
                'قطاع البيئة'
            ],
            color: 'bg-blue-100 border-blue-300',
            icon: '🏗️'
        },
        {
            category: 'القطاعات الاجتماعية والخدمية',
            items: [
                'القطاع الصحي',
                'قطاع التعليم والتدريب المهني والتقني',
                'قطاع المرأة والطفل',
                'قطاع الأشخاص ذوي الإعاقة وكبار السن',
                'قطاع الثقافة والترفيه',
                'المجتمع المحلي'
            ],
            color: 'bg-purple-100 border-purple-300',
            icon: '👥'
        },
        {
            category: 'القطاعات الإدارية والحكومية',
            items: [
                'قطاع البلديات والسلطات المحلية',
                'القطاع العام',
                'قطاع الأمن العام'
            ],
            color: 'bg-red-100 border-red-300',
            icon: '🏛️'
        },
        {
            category: 'القطاعات التقنية والمعرفية',
            items: [
                'قطاع الاتصالات وتكنولوجيا المعلومات',
                'قطاع السياحة والنشاط الفندقي'
            ],
            color: 'bg-indigo-100 border-indigo-300',
            icon: '💻'
        }
    ];

    // منهجية البحث
    const methodology = [
        { step: 1, title: 'تحديد أهداف البحث', description: 'فهم الاحتياجات وتحديد الأهداف بوضوح' },
        { step: 2, title: 'جمع البيانات', description: 'استخدام أدوات بحث متقدمة لجمع البيانات' },
        { step: 3, title: 'التحليل', description: 'تحليل البيانات باستخدام منهجيات علمية' },
        { step: 4, title: 'التوصيات', description: 'تقديم توصيات عملية قابلة للتطبيق' },
        { step: 5, title: 'المتابعة والتقييم', description: 'متابعة التنفيذ وتقييم الأثر' }
    ];

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Hero Section */}
            <section className="bg-gradient-to-l from-blue-900 to-blue-700 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        نحو قرارات أدق... من خلال أبحاث ودراسات مبنية على الأدلة
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                        في مجموعة النور الاستشارية، نقدّم منظومة متكاملة من خدمات الأبحاث والدراسات
                        التي تُمكّن المؤسسات والجهات الفاعلة من اتخاذ قرارات مستنيرة مبنية على البيانات
                        في مختلف القطاعات التنموية والاقتصادية والاجتماعية في فلسطين.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                            اطلب استشارة الآن
                        </button>
                        <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                            ابدأ مشروعك البحثي معنا
                        </button>
                    </div>
                </div>
            </section>

            {/* من نحن */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
                        خبرة تحليلية... رؤية استراتيجية
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                نؤمن في مجموعة النور أن البحث العلمي ليس غاية بحد ذاته، بل وسيلة لصنع أثر مجتمعي حقيقي.
                                نستخدم أدوات بحث متقدمة لجمع وتحليل البيانات، ونعتمد على فرق متخصصة تجمع بين الخبرة
                                الأكاديمية والميدانية لضمان نتائج موثوقة وذات أثر.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                                    <span className="text-2xl">📊</span>
                                    <span className="font-semibold">بحث كمي</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                                    <span className="text-2xl">🎯</span>
                                    <span className="font-semibold">بحث نوعي</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                                    <span className="text-2xl">📈</span>
                                    <span className="font-semibold">تحليل بيانات</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                                    <span className="text-2xl">🚀</span>
                                    <span className="font-semibold">مخرجات استراتيجية</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-8">
                            <img
                                src="/consulting-hero.jpg"
                                alt="منهجية البحث"
                                className="rounded-lg w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* الخدمات */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
                        نقدّم لك حزمة متكاملة من خدمات البحث والتحليل
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {researchServices.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-200"
                            >
                                <div className="text-3xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <button
                                    onClick={() => setSelectedService(service.id)}
                                    className="text-gold-600 hover:text-gold-700 font-semibold text-sm flex items-center gap-2"
                                >
                                    اقرأ المزيد
                                    <span>→</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* القطاعات */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
                        نغطي جميع القطاعات التي تصنع مستقبل فلسطين
                    </h2>
                    <div className="space-y-6">
                        {sectors.map((sectorGroup, index) => (
                            <div key={index} className={`border-2 rounded-2xl p-6 ${sectorGroup.color}`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">{sectorGroup.icon}</span>
                                    <h3 className="text-2xl font-bold text-gray-800">{sectorGroup.category}</h3>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {sectorGroup.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* المنهجية */}
            <section className="py-16 bg-gradient-to-l from-blue-50 to-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
                        نُحوّل البيانات إلى معرفة... والمعرفة إلى قرارات
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block"></div>
                            <div className="grid md:grid-cols-5 gap-6 relative">
                                {methodology.map((step, index) => (
                                    <div key={step.step} className="text-center">
                                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10">
                                            {step.step}
                                        </div>
                                        <h3 className="font-bold text-lg text-blue-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-600 text-sm">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                            <p className="text-xl text-center text-gray-700 italic leading-relaxed">
                                "في مجموعة النور، نؤمن أن البحث العلمي ليس غاية بحد ذاته، بل وسيلة لصنع أثر مجتمعي حقيقي."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        هل تحتاج إلى دراسة تدعم قرارك القادم؟
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        تواصل مع فريقنا من الخبراء لبدء مشروعك البحثي اليوم
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                            ابدأ مشروعك البحثي معنا
                        </button>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <span>📧</span>
                            <span>research@al-nourgroup.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>📞</span>
                            <span>+970 599 000 000</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* وسائل التواصل الاجتماعي */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">
                        تابع قسم الدراسات والأبحاث في مجموعة النور
                    </h3>
                    <div className="flex justify-center gap-4 mb-6">
                        {[
                            { name: 'LinkedIn', icon: '💼', color: 'bg-blue-600' },
                            { name: 'Twitter', icon: '🐦', color: 'bg-black' },
                            { name: 'Facebook', icon: '📘', color: 'bg-blue-500' },
                            { name: 'YouTube', icon: '📹', color: 'bg-red-600' }
                        ].map((social) => (
                            <button
                                key={social.name}
                                className={`${social.color} text-white w-12 h-12 rounded-full flex items-center justify-center text-lg hover:opacity-90 transition duration-300`}
                            >
                                {social.icon}
                            </button>
                        ))}
                    </div>
                    <p className="text-gray-600">
                        تابع آخر الإصدارات والنتائج على وسائل التواصل الاجتماعي
                    </p>
                </div>
            </section>
            <ExpertsSection />
            <BlogSection />
            <ExpertsSectionWithFilter />
        </div>
    );
};

export default ResearchStudiesPage;