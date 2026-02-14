/**
 * Ministry of Education - Educational Chat Platform
 * Main JavaScript File
 * 
 * Features:
 * - Page navigation system
 * - Authentication UI (Login/Signup)
 * - Student dashboard with stage/grade/subject selection
 * - Teacher dashboard with question filtering
 * - Chat interface with real-time simulation
 * - Form validation
 * - Dynamic content loading
 * - Notification system
 * 
 * Note: This is a front-end only implementation.
 * All data is stored in memory and will be lost on page refresh.
 */

// ==================== DATA STRUCTURES ====================

/**
 * Educational System Data - Egyptian Education System (New System)
 * Contains all stages, grades, and subjects
 */
const educationData = {
    // Primary Stage - 6 grades
    primary: {
        name: 'المرحلة الابتدائية',
        grades: {
            grade1: {
                name: 'الصف الأول الابتدائي',
                subjects: [
                    { id: 'arabic', name: 'اللغة العربية', icon: 'fa-book' },
                    { id: 'english', name: 'اللغة الإنجليزية', icon: 'fa-language' },
                    { id: 'math', name: 'الرياضيات', icon: 'fa-calculator' },
                    { id: 'science', name: 'العلوم', icon: 'fa-flask' },
                    { id: 'social', name: 'الدراسات الاجتماعية', icon: 'fa-globe' },
                    { id: 'religion', name: 'التربية الدينية', icon: 'fa-mosque' },
                    { id: 'art', name: 'التربية الفنية', icon: 'fa-palette' },
                    { id: 'pe', name: 'التربية البدنية', icon: 'fa-running' },
                    { id: 'computer', name: 'الحاسب الآلي', icon: 'fa-laptop' }
                ]
            },
            grade2: {
                name: 'الصف الثاني الابتدائي',
                subjects: [
                    { id: 'arabic', name: 'اللغة العربية', icon: 'fa-book' },
                    { id: 'english', name: 'اللغة الإنجليزية', icon: 'fa-language' },
                    { id: 'math', name: 'الرياضيات', icon: 'fa-calculator' },
                    { id: 'science', name: 'العلوم', icon: 'fa-flask' },
                    { id: 'social', name: 'الدراسات الاجتماعية', icon: 'fa-globe' },
                    { id: 'religion', name: 'التربية الدينية', icon: 'fa-mosque' },
                    { id: 'art', name: 'التربية الفنية', icon: 'fa-palette' },
                    { id: 'pe', name: 'التربية البدنية', icon: 'fa-running' },
                    { id: 'computer', name: 'الحاسب الآلي', icon: 'fa-laptop' }
                ]
            },
            grade3: {
                name: 'الصف الثالث الابتدائي',
                subjects: [
                    { id: 'arabic', name: 'اللغة العربية', icon: 'fa-book' },
                    { id: 'english', name: 'اللغة الإنجليزية', icon: 'fa-language' },
                    { id: 'math', name: 'الرياضيات', icon: 'fa-calculator' },
                    { id: 'science', name: 'العلوم', icon: 'fa-flask' },
                    { id: 'social', name: 'الدراسات الاجتماعية', icon: 'fa-globe' },
                    { id: 'religion', name: 'التربية الدينية', icon: 'fa-mosque' },
                    { id: 'art', name: 'التربية الفنية', icon: 'fa-palette' },
                    { id: 'pe', name: 'التربية البدنية', icon: 'fa-running' },
                    { id: 'computer', name: 'الحاسب الآلي', icon: 'fa-laptop' }
                ]
            },
            grade4: {
                name: 'الصف الرابع الابتدائي',
                subjects: [
                    { id: 'arabic', name: 'اللغة العربية', icon: 'fa-book' },
                    { id: 'english', name: 'اللغة الإنجليزية', icon: 'fa-language' },
                    { id: 'math', name: 'الرياضيات', icon: 'fa-calculator' },
                    { id: 'science', name: 'العلوم', icon: 'fa-flask' },
                    { id: 'social', name: 'الدراسات الاجتماعية', icon: 'fa-globe' },
                    { id: 'religion', name: 'التربية الدينية', icon: 'fa-mosque' },
                    { id: 'art', name: 'التربية الفنية', icon: 'fa-palette' },
                    { id: 'pe', name: 'التربية البدنية', icon: 'fa-running' },
                    { id: 'computer', name: 'الحاسب الآلي', icon: 'fa-laptop' }
                ]
            },
            grade5: {
                name: 'الصف الخامس الابتدائي',
                subjects: [
                    { id: 'arabic', name: 'اللغة العربية', icon: 'fa-book' },
                    { id: 'english', name: 'اللغة الإنجليزية', icon: 'fa-language' },
                    { id: 'math', name: 'الرياضيات', icon: 'fa-calculator' },
                    { id: 'science', name: 'العلوم', icon: 'fa-flask' },
                    { id: 'social', name: 'الدراسات الاجتماعية', icon: 'fa-globe' },
                    { id: 'religion', name: 'التربية الدينية', icon: 'fa-mosque' },
                    { id: 'art', name: 'التربية الفنية', icon: 'fa-palette' },
                    { id: 'pe', name: 'التربية البدنية', icon: 'fa-running' },
                    { id: 'computer', name: 'الحاسب الآلي', icon: 'fa-laptop' }
                ]
            },
            grade6: {
                name: 'الصف السادس الابتدائي',
                subjects: [
                    { id: 'arabic', name: 'اللغة العربية', icon: 'fa-book' },
                    { id: 'english', name: 'اللغة الإنجليزية', icon: 'fa-language' },
                    { id: 'math', name: 'الرياضيات', icon: 'fa-calculator' },
                    { id: 'science', name: 'العلوم', icon: 'fa-flask' },
                    { id: 'social', name: 'الدراسات الاجتماعية', icon: 'fa-globe' },
                    { id: 'religion', name: 'التربية الدينية', icon: 'fa-mosque' },
                    { id: 'art', name: 'التربية الفنية', icon: 'fa-palette' },
                    { id: 'pe', name: 'التربية البدنية', icon: 'fa-running' },
                    { id: 'computer', name: 'الحاسب الآلي', icon: 'fa-laptop' }
                ]
            }
        }
    },
    // Preparatory Stage - 3 grades
    preparatory: {
        name: 'المرحلة الإعدادية',
        grades: {
            grade1: {
                name: 'الصف الأول الإعدادي',
                subjects: [
                    { id: 'arabic', name: 'اللغة العربية', icon: 'fa-book' },
                    { id: 'english', name: 'اللغة الإنجليزية', icon: 'fa-language' },
                    { id: 'math', name: 'الرياضيات', icon: 'fa-calculator' },
                    { id: 'science', name: 'العلوم', icon: 'fa-flask' },
                    { id: 'social', name: 'الدراسات الاجتماعية', icon: 'fa-globe' },
                    { id: 'religion', name: 'التربية الدينية', icon: 'fa-mosque' },
                    { id: 'art', name: 'التربية الفنية', icon: 'fa-palette' },
                    { id: 'pe', name: 'التربية البدنية', icon: 'fa-running' },
                    { id: 'computer', name: 'الحاسب الآلي', icon: 'fa-laptop' },
                    { id: 'french', name: 'اللغة الفرنسية', icon: 'fa-flag' }
                ]
            },
            grade2: {
                name: 'الصف الثاني الإعدادي',
                subjects: [
                    { id: 'arabic', name: 'اللغة العربية', icon: 'fa-book' },
                    { id: 'english', name: 'اللغة الإنجليزية', icon: 'fa-language' },
                    { id: 'math', name: 'الرياضيات', icon: 'fa-calculator' },
                    { id: 'science', name: 'العلوم', icon: 'fa-flask' },
                    { id: 'social', name: 'الدراسات الاجتماعية', icon: 'fa-globe' },
                    { id: 'religion', name: 'التربية الدينية', icon: 'fa-mosque' },
                    { id: 'art', name: 'التربية الفنية', icon: 'fa-palette' },
                    { id: 'pe', name: 'التربية البدنية', icon: 'fa-running' },
                    { id: 'computer', name: 'الحاسب الآلي', icon: 'fa-laptop' },
                    { id: 'french', name: 'اللغة الفرنسية', icon: 'fa-flag' }
                ]
            },
            grade3: {
                name: 'الصف الثالث الإعدادي',
                subjects: [
                    { id: 'arabic', name: 'اللغة العربية', icon: 'fa-book' },
                    { id: 'english', name: 'اللغة الإنجليزية', icon: 'fa-language' },
                    { id: 'math', name: 'الرياضيات', icon: 'fa-calculator' },
                    { id: 'science', name: 'العلوم', icon: 'fa-flask' },
                    { id: 'social', name: 'الدراسات الاجتماعية', icon: 'fa-globe' },
                    { id: 'religion', name: 'التربية الدينية', icon: 'fa-mosque' },
                    { id: 'art', name: 'التربية الفنية', icon: 'fa-palette' },
                    { id: 'pe', name: 'التربية البدنية', icon: 'fa-running' },
                    { id: 'computer', name: 'الحاسب الآلي', icon: 'fa-laptop' },
                    { id: 'french', name: 'اللغة الفرنسية', icon: 'fa-flag' }
                ]
            }
        }
    },
    // Secondary Stage - 3 grades
    secondary: {
        name: 'المرحلة الثانوية',
        grades: {
            grade1: {
                name: 'الصف الأول الثانوي',
                subjects: [
                    { id: 'arabic', name: 'اللغة العربية', icon: 'fa-book' },
                    { id: 'english', name: 'اللغة الإنجليزية', icon: 'fa-language' },
                    { id: 'math', name: 'الرياضيات', icon: 'fa-calculator' },
                    { id: 'physics', name: 'الفيزياء', icon: 'fa-atom' },
                    { id: 'chemistry', name: 'الكيمياء', icon: 'fa-flask' },
                    { id: 'biology', name: 'الأحياء', icon: 'fa-dna' },
                    { id: 'geology', name: 'الجيولوجيا', icon: 'fa-mountain' },
                    { id: 'history', name: 'التاريخ', icon: 'fa-landmark' },
                    { id: 'geography', name: 'الجغرافيا', icon: 'fa-map' },
                    { id: 'philosophy', name: 'الفلسفة', icon: 'fa-brain' },
                    { id: 'psychology', name: 'علم النفس', icon: 'fa-user-md' },
                    { id: 'religion', name: 'التربية الدينية', icon: 'fa-mosque' },
                    { id: 'pe', name: 'التربية البدنية', icon: 'fa-running' },
                    { id: 'computer', name: 'الحاسب الآلي', icon: 'fa-laptop' },
                    { id: 'french', name: 'اللغة الفرنسية', icon: 'fa-flag' }
                ]
            },
            grade2: {
                name: 'الصف الثاني الثانوي',
                subjects: [
                    { id: 'arabic', name: 'اللغة العربية', icon: 'fa-book' },
                    { id: 'english', name: 'اللغة الإنجليزية', icon: 'fa-language' },
                    { id: 'math', name: 'الرياضيات', icon: 'fa-calculator' },
                    { id: 'physics', name: 'الفيزياء', icon: 'fa-atom' },
                    { id: 'chemistry', name: 'الكيمياء', icon: 'fa-flask' },
                    { id: 'biology', name: 'الأحياء', icon: 'fa-dna' },
                    { id: 'geology', name: 'الجيولوجيا', icon: 'fa-mountain' },
                    { id: 'history', name: 'التاريخ', icon: 'fa-landmark' },
                    { id: 'geography', name: 'الجغرافيا', icon: 'fa-map' },
                    { id: 'philosophy', name: 'الفلسفة', icon: 'fa-brain' },
                    { id: 'psychology', name: 'علم النفس', icon: 'fa-user-md' },
                    { id: 'religion', name: 'التربية الدينية', icon: 'fa-mosque' },
                    { id: 'pe', name: 'التربية البدنية', icon: 'fa-running' },
                    { id: 'computer', name: 'الحاسب الآلي', icon: 'fa-laptop' },
                    { id: 'french', name: 'اللغة الفرنسية', icon: 'fa-flag' }
                ]
            },
            grade3: {
                name: 'الصف الثالث الثانوي',
                subjects: [
                    { id: 'arabic', name: 'اللغة العربية', icon: 'fa-book' },
                    { id: 'english', name: 'اللغة الإنجليزية', icon: 'fa-language' },
                    { id: 'math', name: 'الرياضيات', icon: 'fa-calculator' },
                    { id: 'physics', name: 'الفيزياء', icon: 'fa-atom' },
                    { id: 'chemistry', name: 'الكيمياء', icon: 'fa-flask' },
                    { id: 'biology', name: 'الأحياء', icon: 'fa-dna' },
                    { id: 'geology', name: 'الجيولوجيا', icon: 'fa-mountain' },
                    { id: 'history', name: 'التاريخ', icon: 'fa-landmark' },
                    { id: 'geography', name: 'الجغرافيا', icon: 'fa-map' },
                    { id: 'philosophy', name: 'الفلسفة', icon: 'fa-brain' },
                    { id: 'psychology', name: 'علم النفس', icon: 'fa-user-md' },
                    { id: 'religion', name: 'التربية الدينية', icon: 'fa-mosque' },
                    { id: 'pe', name: 'التربية البدنية', icon: 'fa-running' },
                    { id: 'computer', name: 'الحاسب الآلي', icon: 'fa-laptop' },
                    { id: 'french', name: 'اللغة الفرنسية', icon: 'fa-flag' }
                ]
            }
        }
    }
};

/**
 * Sample questions for chat rooms
 */
const sampleQuestions = [
    {
        id: 1,
        author: 'أحمد محمد',
        stage: 'secondary',
        grade: 'grade1',
        subject: 'math',
        text: 'ما هو حل المعادلة التفاضلية: dy/dx = 2x + 3؟',
        time: 'منذ 5 دقائق',
        status: 'new'
    },
    {
        id: 2,
        author: 'سارة أحمد',
        stage: 'secondary',
        grade: 'grade1',
        subject: 'physics',
        text: 'ما هي قوانين نيوتن للحركة؟',
        time: 'منذ 15 دقيقة',
        status: 'answered'
    },
    {
        id: 3,
        author: 'محمد علي',
        stage: 'secondary',
        grade: 'grade1',
        subject: 'chemistry',
        text: 'ما هو الفرق بين التفاعل الكيميائي والتفاعل الفيزيائي؟',
        time: 'منذ 30 دقيقة',
        status: 'new'
    }
];

// ==================== APPLICATION STATE ====================

const appState = {
    currentUser: null,
    currentPage: 'welcome',
    chatSelection: {
        stage: null,
        grade: null,
        subject: null
    },
    questions: [...sampleQuestions]
};

// ==================== UTILITY FUNCTIONS ====================

/**
 * Generate a unique ID
 * @returns {string} Unique identifier
 */
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Get current time in Arabic format
 * @returns {string} Formatted time
 */
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('ar-EG', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
}

/**
 * Show loading overlay
 */
function showLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'flex';
    }
}

/**
 * Hide loading overlay
 */
function hideLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
}

// ==================== NOTIFICATION SYSTEM ====================

/**
 * Show notification to user
 * @param {string} message - Notification message
 * @param {string} type - Notification type (success, error, warning, info)
 * @param {string} title - Optional title
 */
function showNotification(message, type = 'info', title = '') {
    const container = document.getElementById('notificationContainer');
    if (!container) return;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    const titles = {
        success: 'تم بنجاح',
        error: 'خطأ',
        warning: 'تنبيه',
        info: 'معلومة'
    };
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${icons[type]} notification-icon"></i>
        <div class="notification-content">
            <div class="notification-title">${title || titles[type]}</div>
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ==================== PAGE NAVIGATION ====================

/**
 * Navigate to a specific page
 * @param {string} pageName - Name of the page to navigate to
 */
function navigateTo(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageName + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
        appState.currentPage = pageName;
    }
    
    // Update navigation
    updateNavigation();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

/**
 * Update navigation based on current state
 */
function updateNavigation() {
    const navLinks = document.getElementById('navLinks');
    const navUser = document.getElementById('navUser');
    const navLogin = document.getElementById('navLogin');
    const navSignup = document.getElementById('navSignup');
    const navInteractiveChat = document.getElementById('navInteractiveChat');
    const navMyAccount = document.getElementById('navMyAccount');
    const welcomeButtons = document.getElementById('welcomeButtons');
    const loggedInButtons = document.getElementById('loggedInButtons');
    
    // Footer navigation elements
    const footerNavLogin = document.getElementById('footerNavLogin');
    const footerNavSignup = document.getElementById('footerNavSignup');
    const footerNavInteractiveChat = document.getElementById('footerNavInteractiveChat');
    const footerNavMyAccount = document.getElementById('footerNavMyAccount');
    
    if (appState.currentUser) {
        // User is logged in - show appropriate nav links
        if (navUser) navUser.style.display = 'flex';
        if (navInteractiveChat) navInteractiveChat.style.display = 'inline-block';
        if (navMyAccount) navMyAccount.style.display = 'inline-block';
        if (navLogin) navLogin.style.display = 'none';
        if (navSignup) navSignup.style.display = 'none';
        
        // Update welcome page buttons
        if (welcomeButtons) welcomeButtons.style.display = 'none';
        if (loggedInButtons) loggedInButtons.style.display = 'flex';
        
        // Update username display
        const userNameEl = document.getElementById('userName');
        if (userNameEl && appState.currentUser) {
            userNameEl.textContent = appState.currentUser.fullName;
        }
        
        // Update footer navigation for logged in user
        if (footerNavInteractiveChat) footerNavInteractiveChat.style.display = 'inline-block';
        if (footerNavMyAccount) footerNavMyAccount.style.display = 'inline-block';
        if (footerNavLogin) footerNavLogin.style.display = 'none';
        if (footerNavSignup) footerNavSignup.style.display = 'none';
    } else {
        // User is not logged in
        if (navUser) navUser.style.display = 'none';
        if (navInteractiveChat) navInteractiveChat.style.display = 'none';
        if (navMyAccount) navMyAccount.style.display = 'none';
        if (navLogin) navLogin.style.display = 'inline-block';
        if (navSignup) navSignup.style.display = 'inline-block';
        
        // Update welcome page buttons
        if (welcomeButtons) welcomeButtons.style.display = 'flex';
        if (loggedInButtons) loggedInButtons.style.display = 'none';
        
        // Update footer navigation for logged out user
        if (footerNavInteractiveChat) footerNavInteractiveChat.style.display = 'none';
        if (footerNavMyAccount) footerNavMyAccount.style.display = 'none';
        if (footerNavLogin) footerNavLogin.style.display = 'inline-block';
        if (footerNavSignup) footerNavSignup.style.display = 'inline-block';
    }
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === appState.currentPage) {
            link.classList.add('active');
        }
    });
}

// ==================== FORM VALIDATION ====================

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate password (minimum 8 characters)
 * @param {string} password - Password to validate
 * @returns {boolean} Is valid
 */
function isValidPassword(password) {
    return password.length >= 8;
}

/**
 * Show form error
 * @param {string} elementId - Error element ID
 * @param {string} message - Error message
 */
function showFormError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

/**
 * Clear all form errors
 * @param {string} formId - Form ID
 */
function clearFormErrors(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
    }
}

// ==================== AUTHENTICATION ====================

/**
 * Handle login form submission
 * @param {Event} e - Form submit event
 */
function handleLogin(e) {
    e.preventDefault();
    clearFormErrors('loginForm');
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const role = formData.get('role');
    
    let hasError = false;
    
    // Validate email
    if (!email) {
        showFormError('loginEmailError', 'يرجى إدخال البريد الإلكتروني');
        hasError = true;
    } else if (!isValidEmail(email)) {
        showFormError('loginEmailError', 'يرجى إدخال بريد إلكتروني صحيح');
        hasError = true;
    }
    
    // Validate password
    if (!password) {
        showFormError('loginPasswordError', 'يرجى إدخال كلمة المرور');
        hasError = true;
    }
    
    if (hasError) return;
    
    // Simulate login
    showLoading();
    
    setTimeout(() => {
        appState.currentUser = {
            email,
            fullName: role === 'student' ? 'أحمد محمد' : 'أستاذ خالد',
            role
        };
        
        hideLoading();
        showNotification('تم تسجيل الدخول بنجاح', 'success');
        
        // FIX: Navigate to interactiveChat page (which exists in HTML) instead of non-existent 'student'/'teacher' pages
        navigateTo('interactiveChat');
        
        // Reset chat selection when logging in
        appState.chatSelection = { stage: null, grade: null, subject: null };
        resetChatSelection();
    }, 1000);
}

/**
 * Handle signup form submission
 * @param {Event} e - Form submit event
 */
function handleSignup(e) {
    e.preventDefault();
    clearFormErrors('signupForm');
    
    const formData = new FormData(e.target);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const role = formData.get('role');
    
    // FIX: Get terms checkbox properly using .checked property instead of formData.get()
    const termsCheckbox = document.getElementById('signupTerms');
    const terms = termsCheckbox ? termsCheckbox.checked : false;
    
    let hasError = false;
    
    // Validate full name
    if (!fullName || fullName.length < 3) {
        showFormError('signupNameError', 'يرجى إدخال الاسم الكامل (3 أحرف على الأقل)');
        hasError = true;
    }
    
    // Validate email
    if (!email) {
        showFormError('signupEmailError', 'يرجى إدخال البريد الإلكتروني');
        hasError = true;
    } else if (!isValidEmail(email)) {
        showFormError('signupEmailError', 'يرجى إدخال بريد إلكتروني صحيح');
        hasError = true;
    }
    
    // Validate password
    if (!password) {
        showFormError('signupPasswordError', 'يرجى إدخال كلمة المرور');
        hasError = true;
    } else if (!isValidPassword(password)) {
        showFormError('signupPasswordError', 'كلمة المرور يجب أن تكون 8 أحرف على الأقل');
        hasError = true;
    }
    
    // Validate confirm password
    if (password !== confirmPassword) {
        showFormError('signupConfirmPasswordError', 'كلمات المرور غير متطابقة');
        hasError = true;
    }
    
    // Validate terms
    if (!terms) {
        showFormError('signupTermsError', 'يجب الموافقة على الشروط');
        hasError = true;
    }
    
    if (hasError) return;
    
    // Simulate signup
    showLoading();
    
    setTimeout(() => {
        appState.currentUser = {
            email,
            fullName,
            role
        };
        
        hideLoading();
        showNotification('تم إنشاء الحساب بنجاح', 'success');
        
        // FIX: Navigate to interactiveChat page (which exists in HTML) instead of non-existent pages
        navigateTo('interactiveChat');
        
        // Reset chat selection
        appState.chatSelection = { stage: null, grade: null, subject: null };
        resetChatSelection();
    }, 1000);
}

/**
 * Handle logout
 */
function handleLogout() {
    appState.currentUser = null;
    appState.chatSelection = { stage: null, grade: null, subject: null };
    showNotification('تم تسجيل الخروج بنجاح', 'info');
    navigateTo('welcome');
}

// ==================== INTERACTIVE CHAT ====================

/**
 * Reset chat selection to initial state
 */
function resetChatSelection() {
    const chatGradeStep = document.getElementById('chatGradeStep');
    const chatSubjectStep = document.getElementById('chatSubjectStep');
    const subjectChatRoom = document.getElementById('subjectChatRoom');
    
    if (chatGradeStep) chatGradeStep.style.display = 'block';
    if (chatSubjectStep) chatSubjectStep.style.display = 'none';
    if (subjectChatRoom) subjectChatRoom.style.display = 'none';
    
    // Clear any selected states
    document.querySelectorAll('.selection-card').forEach(card => {
        card.classList.remove('selected');
    });
}

/**
 * Handle grade selection in chat
 * @param {string} grade - Selected grade key
 * @param {string} gradeName - Selected grade name
 */
function selectChatGrade(grade, gradeName) {
    appState.chatSelection.grade = grade;
    appState.chatSelection.subject = null;
    
    // Update UI - mark selected
    document.querySelectorAll('#chatGradeStep .selection-card').forEach(card => {
        card.classList.remove('selected');
    });
    const selectedCard = document.querySelector(`#chatGradeStep .selection-card[data-grade="${grade}"]`);
    if (selectedCard) selectedCard.classList.add('selected');
    
    // Load subjects for this grade (using secondary stage data)
    loadChatSubjects(grade);
    
    // Show subject step
    const chatGradeStep = document.getElementById('chatGradeStep');
    const chatSubjectStep = document.getElementById('chatSubjectStep');
    
    if (chatGradeStep) chatGradeStep.style.display = 'none';
    if (chatSubjectStep) chatSubjectStep.style.display = 'block';
}

/**
 * Load subjects for chat grade selection
 * @param {string} grade - Grade key
 */
function loadChatSubjects(grade) {
    const chatSubjectGrid = document.getElementById('chatSubjectGrid');
    if (!chatSubjectGrid) return;
    
    // Map the grade selection to educationData structure
    const gradeKey = grade === 'secondary1' ? 'grade1' : grade;
    const subjects = educationData.secondary.grades[gradeKey]?.subjects || [];
    
    chatSubjectGrid.innerHTML = '';
    
    subjects.forEach((subject) => {
        const card = document.createElement('button');
        card.className = 'selection-card';
        card.dataset.subject = subject.id;
        card.innerHTML = `
            <div class="selection-icon">
                <i class="fas ${subject.icon}"></i>
            </div>
            <h4>${subject.name}</h4>
        `;
        card.addEventListener('click', () => selectChatSubject(subject.id, subject.name));
        chatSubjectGrid.appendChild(card);
    });
}

/**
 * Handle subject selection in chat
 * @param {string} subject - Selected subject key
 * @param {string} subjectName - Selected subject name
 */
function selectChatSubject(subject, subjectName) {
    appState.chatSelection.subject = subject;
    
    // Update UI
    document.querySelectorAll('#chatSubjectStep .selection-card').forEach(card => {
        card.classList.remove('selected');
    });
    const selectedCard = document.querySelector(`#chatSubjectStep .selection-card[data-subject="${subject}"]`);
    if (selectedCard) selectedCard.classList.add('selected');
    
    // Show chat room for this subject
    showSubjectChatRoom(subjectName);
}

/**
 * Show the subject chat room
 * @param {string} subjectName - Subject name to display
 */
function showSubjectChatRoom(subjectName) {
    const chatSelectionContainer = document.getElementById('chatSelectionContainer');
    const subjectChatRoom = document.getElementById('subjectChatRoom');
    const chatRoomSubjectName = document.getElementById('chatRoomSubjectName');
    
    if (chatSelectionContainer) chatSelectionContainer.style.display = 'none';
    if (subjectChatRoom) subjectChatRoom.style.display = 'block';
    if (chatRoomSubjectName) chatRoomSubjectName.textContent = subjectName;
    
    // Load questions for this subject
    loadSubjectQuestions();
}

/**
 * Go back from chat room to subject selection
 */
function backToSubjects() {
    const chatSelectionContainer = document.getElementById('chatSelectionContainer');
    const subjectChatRoom = document.getElementById('subjectChatRoom');
    const chatSubjectStep = document.getElementById('chatSubjectStep');
    
    if (subjectChatRoom) subjectChatRoom.style.display = 'none';
    if (chatSelectionContainer) chatSelectionContainer.style.display = 'block';
    if (chatSubjectStep) chatSubjectStep.style.display = 'block';
}

/**
 * Handle back button in chat selection
 * @param {string} to - Step to go back to
 */
function handleChatBack(to) {
    if (to === 'grade') {
        appState.chatSelection.subject = null;
        
        const chatGradeStep = document.getElementById('chatGradeStep');
        const chatSubjectStep = document.getElementById('chatSubjectStep');
        
        if (chatGradeStep) chatGradeStep.style.display = 'block';
        if (chatSubjectStep) chatSubjectStep.style.display = 'none';
    }
}

/**
 * Load questions for the selected subject
 */
function loadSubjectQuestions() {
    const questionsContainer = document.getElementById('questionsContainer');
    const questionCount = document.getElementById('questionCount');
    
    if (!questionsContainer) return;
    
    const { grade, subject } = appState.chatSelection;
    
    // Filter questions for current subject
    const filteredQuestions = appState.questions.filter(q => 
        q.grade === (grade === 'secondary1' ? 'grade1' : grade) && 
        q.subject === subject
    );
    
    if (questionCount) questionCount.textContent = filteredQuestions.length;
    
    questionsContainer.innerHTML = '';
    
    if (filteredQuestions.length === 0) {
        questionsContainer.innerHTML = `
            <div class="no-questions">
                <i class="fas fa-comments"></i>
                <p>لا توجد أسئلة بعد. كن أول من يسأل!</p>
            </div>
        `;
        return;
    }
    
    filteredQuestions.forEach(question => {
        const questionEl = createQuestionElement(question);
        questionsContainer.appendChild(questionEl);
    });
}

/**
 * Create a question element
 * @param {Object} question - Question data
 * @returns {HTMLElement} Question element
 */
function createQuestionElement(question) {
    const div = document.createElement('div');
    div.className = 'question-item';
    div.innerHTML = `
        <div class="question-header">
            <span class="question-author"><i class="fas fa-user"></i> ${question.author}</span>
            <span class="question-time">${question.time}</span>
        </div>
        <p class="question-text">${question.text}</p>
        <div class="question-actions">
            <button class="btn-reply"><i class="fas fa-reply"></i> رد</button>
            <button class="btn-like"><i class="fas fa-thumbs-up"></i> إعجاب</button>
        </div>
    `;
    return div;
}

/**
 * Post a new question
 */
function postQuestion() {
    const questionInput = document.getElementById('questionInput');
    if (!questionInput) return;
    
    const text = questionInput.value.trim();
    if (!text) {
        showNotification('يرجى كتابة سؤال first', 'warning');
        return;
    }
    
    const { grade, subject } = appState.chatSelection;
    
    const newQuestion = {
        id: generateId(),
        author: appState.currentUser ? appState.currentUser.fullName : 'زائر',
        stage: 'secondary',
        grade: grade === 'secondary1' ? 'grade1' : grade,
        subject: subject,
        text: text,
        time: 'الآن',
        status: 'new'
    };
    
    appState.questions.unshift(newQuestion);
    
    // Clear input
    questionInput.value = '';
    
    // Reload questions
    loadSubjectQuestions();
    
    showNotification('تم نشر سؤالك بنجاح', 'success');
}

// ==================== MY ACCOUNT ====================

/**
 * Load account information
 */
function loadAccountInfo() {
    const accountInfo = document.getElementById('accountInfo');
    if (!accountInfo) return;
    
    if (!appState.currentUser) {
        accountInfo.innerHTML = '<p>يرجى تسجيل الدخول لعرض معلومات حسابك</p>';
        return;
    }
    
    accountInfo.innerHTML = `
        <div class="info-row">
            <span class="info-label">الاسم:</span>
            <span class="info-value">${appState.currentUser.fullName}</span>
        </div>
        <div class="info-row">
            <span class="info-label">البريد الإلكتروني:</span>
            <span class="info-value">${appState.currentUser.email}</span>
        </div>
        <div class="info-row">
            <span class="info-label">نوع الحساب:</span>
            <span class="info-value">${appState.currentUser.role === 'student' ? 'طالب' : 'معلم'}</span>
        </div>
    `;
}

// ==================== BACKGROUND PARTICLES ====================

/**
 * Create floating particles in background
 */
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position and animation
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 10 + Math.random() * 10;
        const size = 2 + Math.random() * 4;
        
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        container.appendChild(particle);
    }
}

// ==================== EVENT LISTENERS ====================

/**
 * Initialize all event listeners
 */
function initializeEventListeners() {
    // Navigation buttons
    document.querySelectorAll('[data-navigate]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const page = btn.dataset.navigate;
            navigateTo(page);
        });
    });
    
    // Navigation links (main navbar)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            // FIX: Only navigate if the page exists or user is logged in for protected pages
            if (page === 'interactiveChat' || page === 'myAccount') {
                if (!appState.currentUser) {
                    showNotification('يرجى تسجيل الدخول first', 'warning');
                    navigateTo('login');
                    return;
                }
            }
            navigateTo(page);
            // Load account info when navigating to my account
            if (page === 'myAccount') {
                loadAccountInfo();
            }
        });
    });
    
    // Footer navigation links - same behavior as navbar links
    document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // Only handle internal page navigation links (not mailto links)
            if (link.dataset.page) {
                e.preventDefault();
                const page = link.dataset.page;
                // Same protection check as navbar
                if (page === 'interactiveChat' || page === 'myAccount') {
                    if (!appState.currentUser) {
                        showNotification('يرجى تسجيل الدخول first', 'warning');
                        navigateTo('login');
                        return;
                    }
                }
                navigateTo(page);
                // Load account info when navigating to my account
                if (page === 'myAccount') {
                    loadAccountInfo();
                }
            }
            // mailto links will work normally without preventDefault
        });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) navLinks.classList.toggle('active');
        });
    }
    
    // Logout button
    const btnLogout = document.getElementById('btnLogout');
    if (btnLogout) {
        btnLogout.addEventListener('click', handleLogout);
    }
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    // Password toggle buttons
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const input = document.getElementById(targetId);
            const icon = btn.querySelector('i');
            
            if (input && icon) {
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            }
        });
    });
    
    // Grade selection for chat
    document.querySelectorAll('#chatGradeStep .selection-card[data-grade]').forEach(btn => {
        btn.addEventListener('click', () => {
            selectChatGrade(btn.dataset.grade, btn.dataset.name);
        });
    });
    
    // Back buttons in chat
    document.querySelectorAll('#chatSubjectStep .btn-back[data-back]').forEach(btn => {
        btn.addEventListener('click', () => {
            handleChatBack(btn.dataset.back);
        });
    });
    
    // Back to subjects button
    const btnBackToSubjects = document.getElementById('btnBackToSubjects');
    if (btnBackToSubjects) {
        btnBackToSubjects.addEventListener('click', backToSubjects);
    }
    
    // Post question button
    const btnPostQuestion = document.getElementById('btnPostQuestion');
    if (btnPostQuestion) {
        btnPostQuestion.addEventListener('click', postQuestion);
    }
    
    // Question input enter key
    const questionInput = document.getElementById('questionInput');
    if (questionInput) {
        questionInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                postQuestion();
            }
        });
    }
}

// ==================== INITIALIZATION ====================

/**
 * Initialize the application
 */
function initializeApp() {
    // Create background particles
    createParticles();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Set initial page
    navigateTo('welcome');
    
    console.log(' Ministry of Education - Educational Chat Platform');
    console.log(' Front-End Application Initialized');
    console.log(' Ready for use!');
}

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);
