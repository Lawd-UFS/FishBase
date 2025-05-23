'use client';

import styles from './ParticipantSidebar.module.css';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '../../../contexts/LanguageContext';

export function ParticipantSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { texts } = useLanguage();

  const handleLogout = () => {
    // limpar token aqui
    // localStorage.removeItem('token'); // se usar auth local

    router.push('/');
  };

  const menu = [
    {
      label: texts.sidebar.menu.hotels,
      icon: '/apartment.svg',
      path: '/participant',
    },
    {
      label: texts.sidebar.menu.transmission,
      icon: '/sensors.svg',
      path: '/participant/transmissao',
      disabled: true,
    },
    {
      label: texts.sidebar.menu.certificates,
      icon: '/developer_guide.svg',
      path: '/participant/certificados',
      disabled: true,
    },
    {
      label: texts.sidebar.menu.abstracts,
      icon: '/article.svg',
      path: '#',
      disabled: true,
    },
  ];

  const extras = [
    {
      label: texts.sidebar.extras.profile,
      icon: '/account_circle.svg',
      path: '/participant/perfil',
      disabled: true,
    },
    {
      label: texts.sidebar.extras.help,
      icon: '/contact_support.svg',
      path: '#',
      disabled: true,
    },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.banner}>
        <Image
          src="/header.png"
          alt="Banner do Evento"
          width={230}
          height={150}
          className={styles.bannerImage}
        />
      </div>

      <div className={styles.menuContainer}>
        <div className={styles.menuGroup}>
          <nav className={styles.menu}>
            {menu.map((item) => (
              <div
                key={item.label}
                className={`${styles.menuItem} ${
                  pathname === item.path ? styles.active : ''
                } ${item.disabled ? styles.disabled : ''}`}
              >
                {item.disabled ? (
                  <div className={styles.disabledLink}>
                    <Image src={item.icon} alt="" width={20} height={20} />
                    <span>
                      {item.label}{' '}
                      <i className={styles.notAvailable}>
                        {texts.sidebar.notAvailable}
                      </i>
                    </span>
                  </div>
                ) : (
                  <a href={item.path}>
                    <Image src={item.icon} alt="" width={20} height={20} />
                    <span>{item.label}</span>
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.menuGroupSmall}>
          <nav className={styles.menu}>
            {extras.map((item) => (
              <div
                key={item.label}
                className={`${styles.menuItem} ${
                  pathname === item.path ? styles.active : ''
                }`}
              >
                <a href={item.path}>
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span>{item.label}</span>
                </a>
              </div>
            ))}
          </nav>
        </div>

        <div
          className={styles.footer}
          onClick={handleLogout}
          style={{ cursor: 'pointer' }}
        >
          <Image
            src="/arrow_menu_close.svg"
            alt={texts.sidebar.footer.exit}
            width={20}
            height={20}
          />
          <span>{texts.sidebar.footer.exit}</span>
        </div>
      </div>
    </aside>
  );
}
