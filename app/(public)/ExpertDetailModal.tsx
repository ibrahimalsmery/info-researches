'use client';

import React from 'react';

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

interface ExpertDetailModalProps {
  expert: Expert;
  isOpen: boolean;
  onClose: () => void;
}

const ExpertDetailModal: React.FC<ExpertDetailModalProps> = ({ 
  expert, 
  isOpen, 
  onClose 
}) => {
  if (!isOpen) return null;

  return (
    <div   className="no-scrollbar fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* الهيدر */}
        <div className="bg-gradient-to-l from-blue-900 to-blue-700 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl md:text-3xl font-bold">{expert.name}</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gold-500 text-2xl transition duration-300"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="flex-1">
              <p className="text-gold-400 text-lg font-semibold mb-2">
                {expert.title}
              </p>
              <p className="text-blue-100 mb-3">{expert.specialization}</p>
              <div className="flex flex-wrap gap-2">
                {expert.sectors.slice(0, 3).map((sector, index) => (
                  <span
                    key={index}
                    className="bg-blue-800 bg-opacity-50 px-3 py-1 rounded-full text-sm"
                  >
                    {sector}
                  </span>
                ))}
                {expert.sectors.length > 3 && (
                  <span className="bg-blue-800 bg-opacity-50 px-3 py-1 rounded-full text-sm">
                    +{expert.sectors.length - 3} أكثر
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* المحتوى */}
        <div className="p-6 space-y-8">
          {/* الوظيفة الحالية */}
          <section>
            <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              الوظيفة الحالية في مجموعة النور
            </h3>
            <p className="text-gray-700 bg-blue-50 p-4 rounded-lg border-r-4 border-gold-500">
              {expert.currentPosition}
            </p>
          </section>

          {/* المؤهلات الأكاديمية */}
          <section>
            <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              المؤهلات الأكاديمية
            </h3>
            <div className="space-y-2">
              {expert.qualifications.map((qualification, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-gold-600 mt-1">🎓</span>
                  <span className="text-gray-700">{qualification}</span>
                </div>
              ))}
            </div>
          </section>

          {/* الخبرة العملية */}
          <section>
            <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              الخبرة العملية
            </h3>
            <div className="bg-gradient-to-l from-blue-50 to-gray-100 p-4 rounded-lg border border-blue-200">
              <p className="text-gray-700 leading-relaxed">{expert.experience}</p>
            </div>
          </section>

          {/* القطاعات */}
          <section>
            <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              القطاعات التي عمل بها
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {expert.sectors.map((sector, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition duration-300"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700 text-sm">{sector}</span>
                </div>
              ))}
            </div>
          </section>

          {/* الإنجازات */}
          <section>
            <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              أبرز الإنجازات
            </h3>
            <div className="space-y-3">
              {expert.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white border border-gold-200 rounded-lg shadow-sm"
                >
                  <span className="text-gold-600 bg-gold-50 p-2 rounded-full text-sm">
                    ✓
                  </span>
                  <span className="text-gray-700 leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>
          </section>

          {/* الاقتباس */}
          <section className="bg-gradient-to-l from-gold-50 to-gold-100 p-6 rounded-2xl border border-gold-200">
            <div className="text-center">
              <span className="text-4xl text-gold-400 mb-4 block">❝</span>
              <p className="text-gray-700 text-lg italic leading-relaxed mb-4">
                {expert.quote}
              </p>
              <p className="text-gold-700 font-semibold">— {expert.name}</p>
            </div>
          </section>
        </div>

        {/* أزرار التواصل */}
        <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex gap-3">
              {expert.linkedin && (
                <a
                  href={expert.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  <span>💼</span>
                  LinkedIn
                </a>
              )}
              {expert.email && (
                <a
                  href={`mailto:${expert.email}`}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                >
                  <span>📧</span>
                  إرسال بريد
                </a>
              )}
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-gold-500 text-blue-900 font-bold rounded-lg hover:bg-gold-600 transition duration-300">
                تواصل مع الخبير
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                احجز استشارة مع فريقنا
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertDetailModal;