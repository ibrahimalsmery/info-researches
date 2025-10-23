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
}

const ExpertsSection = () => {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      sectors: [
        'التعليم',
        'الصحة',
        'القطاع الخاص',
        'المنظمات الدولية',
        'البلديات',
        'القطاع العام'
      ],
      achievements: [
        'إعداد 12 دراسة تنموية لصالح جهات مانحة',
        'تصميم 5 برامج تدريب وطنية',
        'قيادة مشروع رقمنة المدارس في شمال فلسطين',
        'تطوير استراتيجيات لتطوير 20 مؤسسة محلية',
        'تدريب أكثر من 1000 موظف في القطاع العام'
      ],
      quote: 'أؤمن أن التطوير يبدأ من الإنسان، والتقنية هي وسيلته نحو التغيير.',
      email: 'm.awad@al-nourgroup.com',
      linkedin: 'https://linkedin.com/in/mohammed-awad'
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
        'بكالوريوس في علوم الحاسوب - جامعة القدس المفتوحة',
        'شهادة متقدمة في تصميم أنظمة التعلم الإلكتروني'
      ],
      experience: 'أكثر من 15 عامًا في تطوير منصات التعليم الإلكتروني وتصميم المحتوى الرقمي، مع خبرة ميدانية في تطبيق التقنيات الحديثة في البيئة التعليمية الفلسطينية.',
      sectors: [
        'التعليم',
        'التكنولوجيا',
        'التدريب المهني',
        'المنظمات غير الربحية',
        'القطاع الأكاديمي'
      ],
      achievements: [
        'قادت تطوير محتوى منصة "تعلم! مدرستي في جوالي"',
        'تصميم 3 مناهج رقمية للمدارس الفلسطينية',
        'تدريب أكثر من 500 معلم على التقنيات التعليمية',
        'تطوير نظام إدارة التعلم لـ 50 مدرسة',
        'قيادة مشروع التحول الرقمي لوزارة التربية'
      ],
      quote: 'التعليم الرقمي ليس رفاهية، بل ضرورة في عصر التحول الرقمي.',
      email: 'l.abdullah@al-nourgroup.com',
      linkedin: 'https://linkedin.com/in/layla-abdullah'
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
        'ماجستير في الإحصاء التطبيقي - جامعة عين شمس',
        'بكالوريوس في الاقتصاد - جامعة الأزهر'
      ],
      experience: 'أكثر من 18 عامًا في مجال الأبحاث الاقتصادية والتنموية، مع تركيز على تحليل السياسات ودراسات الجدوى وتقييم الأثر في السياق الفلسطيني.',
      sectors: [
        'القطاع الاقتصادي',
        'التنمية المستدامة',
        'التمويل والاستثمار',
        'القطاع المصرفي',
        'المنظمات الدولية',
        'البحث العلمي'
      ],
      achievements: [
        'إعداد 25 دراسة جدوى اقتصادية لمشاريع استثمارية',
        'تحليل تأثير السياسات الاقتصادية على 100 مؤسسة',
        'قيادة فريق بحثي لدراسة الفقر والبطالة في فلسطين',
        'نشر 10 أوراق بحثية في مجلات محكمة',
        'تطوير نموذج تنبؤ اقتصادي للقطاع الخاص'
      ],
      quote: 'البيانات هي الوقود الذي يحرك عملية صنع القرار المستنير.',
      email: 'a.alsaadi@al-nourgroup.com',
      linkedin: 'https://linkedin.com/in/ahmed-alsaadi'
    }
  ];

  const handleExpertClick = (expert: Expert) => {
    setSelectedExpert(expert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExpert(null);
  };

  return (
    <>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
            خبراؤنا... شركاؤك في النجاح
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            في مجموعة النور الاستشارية، يقف خلف كل خدمة فريق من الخبراء والاستشاريين ذوي الخبرات المتنوعة 
            في مجالات الاقتصاد، التنمية، التعليم، التكنولوجيا، وإدارة الموارد البشرية.
          </p>

          {/* الخبراء الرئيسيين */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">خبراؤنا الرئيسيون</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experts.slice(0, 3).map((expert) => (
                <div 
                  key={expert.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
                  onClick={() => handleExpertClick(expert)}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={expert.image} 
                        alt={expert.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gold-500"
                      />
                      <div>
                        <h3 className="font-bold text-lg text-blue-900">{expert.name}</h3>
                        <p className="text-gold-600 text-sm">{expert.title}</p>
                        <p className="text-gray-500 text-xs">{expert.specialization}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {expert.currentPosition}
                    </p>
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
                    <button className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 py-2 rounded-lg text-sm font-semibold transition duration-300 flex items-center justify-center gap-2">
                      <span>عرض الملف الشخصي</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* قيم الفريق */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">قيم فريقنا</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {['المهنية', 'الشفافية', 'العمل الجماعي', 'الابتكار', 'الأثر المستدام'].map((value) => (
                <div key={value} className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <span className="font-semibold text-blue-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
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

export default ExpertsSection;