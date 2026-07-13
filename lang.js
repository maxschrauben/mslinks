// © Max!!! Schrauben Alle Links v1.3.0

(function () {
    'use strict';

    const translations = {
        de: {
            'alle-links': 'ALLE LINKS',
            'allgemein': 'ALLGEMEIN',
            'alle-rechte': '© 2026 MaxSchrauben - Alle Rechte vorbehalten',
            'seite-nicht-gefunden': 'Seite nicht gefunden!',
            'fehler-nachricht': 'Ups! Die Seite, die du suchst, existiert nicht (mehr).',
            'zur-startseite': 'ZUR STARTSEITE',
            'zurueck': 'ZURÜCK',
            'fb-allgemein': 'FACEBOOK ALLGEMEIN',
            'fb-posts': 'FACEBOOK POSTS',
            'page-title': 'Max!!! Schrauben - Alle Links',
            'page-description': 'Alle Links von Max!!! Schrauben, Max!!! Music und MaxGaming.',
            '404-title': '404 - Seite nicht gefunden',
        },
        en: {
            'alle-links': 'ALL LINKS',
            'allgemein': 'GENERAL',
            'alle-rechte': '© 2026 MaxSchrauben - All rights reserved',
            'seite-nicht-gefunden': 'Page not found!',
            'fehler-nachricht': 'Oops! The page you are looking for does not (or no longer) exist.',
            'zur-startseite': 'GO TO HOMEPAGE',
            'zurueck': 'GO BACK',
            'fb-allgemein': 'FACEBOOK GENERAL',
            'fb-posts': 'FACEBOOK POSTS',
            'page-title': 'Max!!! Schrauben - All Links',
            'page-description': 'All links from Max!!! Schrauben, Max!!! Music and MaxGaming.',
            '404-title': '404 - Page not found',
        },
        es: {
            'alle-links': 'TODOS LOS ENLACES',
            'allgemein': 'GENERAL',
            'alle-rechte': '© 2026 MaxSchrauben - Todos los derechos reservados',
            'seite-nicht-gefunden': '¡Página no encontrada!',
            'fehler-nachricht': '¡Ups! La página que buscas no existe (o ya no existe).',
            'zur-startseite': 'IR AL INICIO',
            'zurueck': 'VOLVER',
            'fb-allgemein': 'FACEBOOK GENERAL',
            'fb-posts': 'FACEBOOK PUBLICACIONES',
            'page-title': 'Max!!! Schrauben - Todos los enlaces',
            'page-description': 'Todos los enlaces de Max!!! Schrauben, Max!!! Music y MaxGaming.',
            '404-title': '404 - Página no encontrada',
        },
        fr: {
            'alle-links': 'TOUS LES LIENS',
            'allgemein': 'GÉNÉRAL',
            'alle-rechte': '© 2026 MaxSchrauben - Tous droits réservés',
            'seite-nicht-gefunden': 'Page introuvable !',
            'fehler-nachricht': 'Oups ! La page que vous cherchez n\'existe pas (ou plus).',
            'zur-startseite': 'RETOUR À L\'ACCUEIL',
            'zurueck': 'RETOUR',
            'fb-allgemein': 'FACEBOOK GÉNÉRAL',
            'fb-posts': 'FACEBOOK PUBLICATIONS',
            'page-title': 'Max!!! Schrauben - Tous les liens',
            'page-description': 'Tous les liens de Max!!! Schrauben, Max!!! Music et MaxGaming.',
            '404-title': '404 - Page introuvable',
        },
        it: {
            'alle-links': 'TUTTI I LINK',
            'allgemein': 'GENERALE',
            'alle-rechte': '© 2026 MaxSchrauben - Tutti i diritti riservati',
            'seite-nicht-gefunden': 'Pagina non trovata!',
            'fehler-nachricht': 'Ops! La pagina che stai cercando non esiste (più).',
            'zur-startseite': 'VAI ALLA HOME',
            'zurueck': 'INDIETRO',
            'fb-allgemein': 'FACEBOOK GENERALE',
            'fb-posts': 'FACEBOOK POST',
            'page-title': 'Max!!! Schrauben - Tutti i link',
            'page-description': 'Tutti i link di Max!!! Schrauben, Max!!! Music e MaxGaming.',
            '404-title': '404 - Pagina non trovata',
        },
        ru: {
            'alle-links': 'ВСЕ ССЫЛКИ',
            'allgemein': 'ОБЩЕЕ',
            'alle-rechte': '© 2026 MaxSchrauben - Все права защищены',
            'seite-nicht-gefunden': 'Страница не найдена!',
            'fehler-nachricht': 'Упс! Страница, которую вы ищете, не существует (или больше не существует).',
            'zur-startseite': 'НА ГЛАВНУЮ',
            'zurueck': 'НАЗАД',
            'fb-allgemein': 'FACEBOOK ОБЩЕЕ',
            'fb-posts': 'FACEBOOK ПОСТЫ',
            'page-title': 'Max!!! Schrauben - Все ссылки',
            'page-description': 'Все ссылки Max!!! Schrauben, Max!!! Music и MaxGaming.',
            '404-title': '404 - Страница не найдена',
        },
        pt: {
            'alle-links': 'TODOS OS LINKS',
            'allgemein': 'GERAL',
            'alle-rechte': '© 2026 MaxSchrauben - Todos os direitos reservados',
            'seite-nicht-gefunden': 'Página não encontrada!',
            'fehler-nachricht': 'Ops! A página que você procura não existe (mais).',
            'zur-startseite': 'IR PARA O INÍCIO',
            'zurueck': 'VOLTAR',
            'fb-allgemein': 'FACEBOOK GERAL',
            'fb-posts': 'FACEBOOK PUBLICAÇÕES',
            'page-title': 'Max!!! Schrauben - Todos os links',
            'page-description': 'Todos os links de Max!!! Schrauben, Max!!! Music e MaxGaming.',
            '404-title': '404 - Página não encontrada',
        },
        nl: {
            'alle-links': 'ALLE LINKS',
            'allgemein': 'ALGEMEEN',
            'alle-rechte': '© 2026 MaxSchrauben - Alle rechten voorbehouden',
            'seite-nicht-gefunden': 'Pagina niet gevonden!',
            'fehler-nachricht': 'Oeps! De pagina die je zoekt bestaat niet (meer).',
            'zur-startseite': 'NAAR STARTPAGINA',
            'zurueck': 'TERUG',
            'fb-allgemein': 'FACEBOOK ALGEMEEN',
            'fb-posts': 'FACEBOOK BERICHTEN',
            'page-title': 'Max!!! Schrauben - Alle links',
            'page-description': 'Alle links van Max!!! Schrauben, Max!!! Music en MaxGaming.',
            '404-title': '404 - Pagina niet gevonden',
        },
        pl: {
            'alle-links': 'WSZYSTKIE LINKI',
            'allgemein': 'OGÓLNE',
            'alle-rechte': '© 2026 MaxSchrauben - Wszelkie prawa zastrzeżone',
            'seite-nicht-gefunden': 'Strona nie znaleziona!',
            'fehler-nachricht': 'Ups! Strona, której szukasz, nie istnieje (już).',
            'zur-startseite': 'STRONA GŁÓWNA',
            'zurueck': 'WSTECZ',
            'fb-allgemein': 'FACEBOOK OGÓLNE',
            'fb-posts': 'FACEBOOK POSTY',
            'page-title': 'Max!!! Schrauben - Wszystkie linki',
            'page-description': 'Wszystkie linki Max!!! Schrauben, Max!!! Music i MaxGaming.',
            '404-title': '404 - Strona nie znaleziona',
        },
        tr: {
            'alle-links': 'TÜM BAĞLANTILAR',
            'allgemein': 'GENEL',
            'alle-rechte': '© 2026 MaxSchrauben - Tüm hakları saklıdır',
            'seite-nicht-gefunden': 'Sayfa bulunamadı!',
            'fehler-nachricht': 'Hay aksi! Aradığınız sayfa mevcut değil (artık).',
            'zur-startseite': 'ANA SAYFAYA GİT',
            'zurueck': 'GERİ',
            'fb-allgemein': 'FACEBOOK GENEL',
            'fb-posts': 'FACEBOOK GÖNDERİLER',
            'page-title': 'Max!!! Schrauben - Tüm bağlantılar',
            'page-description': 'Max!!! Schrauben, Max!!! Music ve MaxGaming\'in tüm bağlantıları.',
            '404-title': '404 - Sayfa bulunamadı',
        },
        ja: {
            'alle-links': 'すべてのリンク',
            'allgemein': '一般',
            'alle-rechte': '© 2026 MaxSchrauben - 全著作権所有',
            'seite-nicht-gefunden': 'ページが見つかりません！',
            'fehler-nachricht': 'おっと！お探しのページは存在しません（もう存在しません）。',
            'zur-startseite': 'ホームへ',
            'zurueck': '戻る',
            'fb-allgemein': 'FACEBOOK 一般',
            'fb-posts': 'FACEBOOK 投稿',
            'page-title': 'Max!!! Schrauben - すべてのリンク',
            'page-description': 'Max!!! Schrauben、Max!!! Music、MaxGamingのすべてのリンク。',
            '404-title': '404 - ページが見つかりません',
        },
        ko: {
            'alle-links': '모든 링크',
            'allgemein': '일반',
            'alle-rechte': '© 2026 MaxSchrauben - 모든 권리 보유',
            'seite-nicht-gefunden': '페이지를 찾을 수 없습니다!',
            'fehler-nachricht': '이런! 찾으시는 페이지가 존재하지 않습니다 (더 이상).',
            'zur-startseite': '홈으로',
            'zurueck': '뒤로',
            'fb-allgemein': 'FACEBOOK 일반',
            'fb-posts': 'FACEBOOK 게시물',
            'page-title': 'Max!!! Schrauben - 모든 링크',
            'page-description': 'Max!!! Schrauben, Max!!! Music 및 MaxGaming의 모든 링크.',
            '404-title': '404 - 페이지를 찾을 수 없습니다',
        },
        zh: {
            'alle-links': '所有链接',
            'allgemein': '通用',
            'alle-rechte': '© 2026 MaxSchrauben - 版权所有',
            'seite-nicht-gefunden': '页面未找到！',
            'fehler-nachricht': '糟糕！您查找的页面不存在（或已不存在）。',
            'zur-startseite': '返回首页',
            'zurueck': '返回',
            'fb-allgemein': 'FACEBOOK 通用',
            'fb-posts': 'FACEBOOK 帖子',
            'page-title': 'Max!!! Schrauben - 所有链接',
            'page-description': 'Max!!! Schrauben、Max!!! Music 和 MaxGaming 的所有链接。',
            '404-title': '404 - 页面未找到',
        },
    };

    function detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage || 'de';
        const primary = browserLang.split('-')[0].toLowerCase();
        return translations[primary] ? primary : 'de';
    }

    function applyTranslations(lang) {
        const dict = translations[lang];
        if (!dict) return;

        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                if (el.querySelector('br')) {
                    el.innerHTML = dict[key].replace(/\n/g, '<br>');
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        var titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) {
            var titleKey = titleEl.getAttribute('data-i18n');
            if (dict[titleKey] !== undefined) {
                document.title = dict[titleKey];
            }
        }

        var descEl = document.querySelector('meta[name="description"][data-i18n]');
        if (descEl) {
            var descKey = descEl.getAttribute('data-i18n');
            if (dict[descKey] !== undefined) {
                descEl.setAttribute('content', dict[descKey]);
            }
        }
    }

    function init() {
        var lang = detectLanguage();
        applyTranslations(lang);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
