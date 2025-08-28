const getPreferredTheme = () => {
    if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

const applyTheme = () => {
    setTheme(getPreferredTheme());
};

applyTheme();

// Optional: Add a toggle button for user to switch theme
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        setTheme(getPreferredTheme());
    });
});

// If you have a theme toggle button, use this:
document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const currentTheme = getPreferredTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});