function isPalindrom(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
};

/* MANIÉRE OPTIMISÉE */
function isPalindrome(str) {
    str = str.toLowerCase();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (!/[a-z0-9]/.test(str[left])) {
            left++;
            continue;
        }
        if (!/[a-z0-9]/.test(str[right])) {
            right--;
            continue;
        }
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
