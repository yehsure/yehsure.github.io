import { useState } from 'react';

interface AboutProps {
  theme: 'light' | 'dark';
}

export default function About({ theme }: AboutProps) {
  const [language, setLanguage] = useState<'en' | 'vi'>('en');

  const bgSectionClass = theme === 'dark' ? 'bg-slate-800/30' : 'bg-slate-100/50';
  const textHeadingClass = theme === 'dark' ? 'text-slate-50' : 'text-slate-900';
  const textSubHeadingClass = theme === 'dark' ? 'text-slate-100' : 'text-slate-800';
  const textBodyClass = theme === 'dark' ? 'text-slate-300' : 'text-slate-700';
  const buttonClass = (isActive: boolean) => `
    px-4 py-2 rounded-lg font-mono text-sm transition
    ${isActive
      ? theme === 'dark'
        ? 'bg-cyan-500/30 text-cyan-400 border border-cyan-400'
        : 'bg-cyan-100 text-cyan-700 border border-cyan-400'
      : theme === 'dark'
        ? 'bg-slate-700/50 text-slate-300 hover:text-cyan-400'
        : 'bg-slate-200/50 text-slate-600 hover:text-cyan-600'
    }
  `;

  const content = {
    en: {
      intro: "Hello, my name is Nguyen Tan Phat, also known as yehsure. I am an Information Security student at the Posts and Telecommunications Institute of Technology (PTIT). My journey into cybersecurity is driven by curiosity — a desire to understand the inner workings of systems and how to effectively defend them.",
      experience: {
        title: "Experience & CTF",
        text: "I am currently competing in CTF events with my team, DWY_YK. While I can navigate various categories, I am particularly fascinated by Digital Forensics and Reverse Engineering. I find a unique excitement in reconstructing digital artifacts, performing reverse engineering, and analyzing machine code to fully grasp how software functions under the hood."
      },
      goals: {
        title: "Future Goals",
        text: "My current focus is on the defensive side of security, aiming for a career as a SOC Analyst, Incident Responder, or Malware Analyst. I use this website to document my latest projects, lab walkthroughs, and research reports as I prepare for my transition into the professional cybersecurity field."
      }
    },
    vi: {
      intro: "Xin chào, mình tên là Nguyễn Tấn Phát (hay còn gọi là yehsure). Hiện mình là sinh viên chuyên ngành An toàn thông tin tại Học viện Công nghệ Bưu chính Viễn thông (PTIT). Hành trình của mình trong thế giới an ninh mạng được thúc đẩy bởi sự tò mò — mong muốn thấu hiểu cấu trúc bên trong của các hệ thống và cách thức bảo vệ chúng khi gặp sự cố.",
      experience: {
        title: "Kinh nghiệm & CTF",
        text: "Mình đang thi đấu CTF cùng đội của mình là DWY_YK. Dù có thể tham gia ở hầu hết các mảng, nhưng mình đặc biệt hứng thú với Digital Forensics và Reverse Engineering. Việc khôi phục các dấu vết số, dịch ngược và phân tích mã máy để thấu hiểu tường tận cách hoạt động của phần mềm luôn mang lại cho mình một sự lôi cuốn đặc biệt."
      },
      goals: {
        title: "Định hướng tương lai",
        text: "Hiện tại, mình đang tập trung vào mặt phòng thủ, hướng tới trở thành một SOC Analyst, Incident Responder hoặc Malware Analyst. Mình sử dụng website này để đăng tải các dự án cá nhân, hướng dẫn lab và báo cáo nghiên cứu. Đây là cách mình tích lũy kinh nghiệm và chuẩn bị cho hành trình bước vào ngành an ninh mạng chuyên nghiệp."
      }
    }
  };

  const renderTextWithLink = (text: string) => {
    return text.split('DWY_YK').map((part, i) => (
      <span key={i}>
        {part}
        {i < text.split('DWY_YK').length - 1 && (
          <a
            href="https://ctftime.org/team/405102"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-cyan-400 hover:text-cyan-300 transition underline"
          >
            DWY_YK
          </a>
        )}
      </span>
    ));
  };

  const currentContent = content[language];

  return (
    <section className={`py-20 px-4 ${bgSectionClass}`}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className={`text-4xl font-bold ${textHeadingClass}`}>About</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setLanguage('en')}
              className={buttonClass(language === 'en')}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('vi')}
              className={buttonClass(language === 'vi')}
            >
              VI
            </button>
          </div>
        </div>

        <div className="space-y-8 max-w-3xl">
          {/* Intro Section */}
          <p className={`${textBodyClass} leading-relaxed text-lg`}>
            {renderTextWithLink(currentContent.intro)}
          </p>

          {/* Experience Section */}
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${textSubHeadingClass}`}>
              {currentContent.experience.title}
            </h3>
            <p className={`${textBodyClass} leading-relaxed text-lg`}>
              {renderTextWithLink(currentContent.experience.text)}
            </p>
          </div>

          {/* Goals Section */}
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${textSubHeadingClass}`}>
              {currentContent.goals.title}
            </h3>
            <p className={`${textBodyClass} leading-relaxed text-lg`}>
              {renderTextWithLink(currentContent.goals.text)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}