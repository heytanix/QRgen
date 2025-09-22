document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const textInput = document.getElementById('textInput');
    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const newQrBtn = document.getElementById('newQrBtn');
    const charCount = document.getElementById('charCount');
    
    // Result elements
    const loadingSpinner = document.getElementById('loadingSpinner');
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    const qrResult = document.getElementById('qrResult');
    const qrImage = document.getElementById('qrImage');
    const qrText = document.getElementById('qrText');
    const qrLength = document.getElementById('qrLength');
    
    let currentQrData = '';
    
    // Character counter
    textInput.addEventListener('input', function() {
        const length = this.value.length;
        charCount.textContent = length;
        
        // Update generate button state
        generateBtn.disabled = length === 0;
        clearBtn.disabled = length === 0;
        
        // Color coding for character count
        if (length > 1800) {
            charCount.style.color = '#dc3545';
        } else if (length > 1500) {
            charCount.style.color = '#ffc107';
        } else {
            charCount.style.color = '#666';
        }
    });
    
    // Generate QR Code
    generateBtn.addEventListener('click', async function() {
        const text = textInput.value.trim();
        
        if (!text) {
            showError('Please enter some text to generate a QR code.');
            return;
        }
        
        currentQrData = text;
        
        // Show loading state
        showLoading();
        
        try {
            const response = await fetch('/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: text })
            });
            
            const data = await response.json();
            
            if (data.success) {
                showQrResult(data.image, text);
            } else {
                showError(data.error || 'Failed to generate QR code.');
            }
        } catch (error) {
            console.error('Error:', error);
            showError('Network error. Please check your connection and try again.');
        }
    });
    
    // Clear input
    clearBtn.addEventListener('click', function() {
        textInput.value = '';
        charCount.textContent = '0';
        generateBtn.disabled = true;
        clearBtn.disabled = true;
        hideAllResults();
        textInput.focus();
    });
    
    // Download QR Code
    downloadBtn.addEventListener('click', async function() {
        if (!currentQrData) return;
        
        try {
            downloadBtn.disabled = true;
            downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
            
            const response = await fetch('/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: currentQrData })
            });
            
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `qrcode_${Date.now()}.png`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            } else {
                throw new Error('Download failed');
            }
        } catch (error) {
            console.error('Download error:', error);
            showError('Failed to download QR code. Please try again.');
        } finally {
            downloadBtn.disabled = false;
            downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download PNG';
        }
    });
    
    // Generate new QR code
    newQrBtn.addEventListener('click', function() {
        textInput.value = '';
        charCount.textContent = '0';
        generateBtn.disabled = true;
        clearBtn.disabled = true;
        hideAllResults();
        textInput.focus();
    });
    
    // Enter key to generate
    textInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.ctrlKey && !generateBtn.disabled) {
            generateBtn.click();
        }
    });
    
    // Helper functions
    function showLoading() {
        hideAllResults();
        loadingSpinner.classList.remove('hidden');
        generateBtn.disabled = true;
    }
    
    function showError(message) {
        hideAllResults();
        errorText.textContent = message;
        errorMessage.classList.remove('hidden');
        generateBtn.disabled = false;
    }
    
    function showQrResult(imageData, text) {
        hideAllResults();
        qrImage.src = imageData;
        qrText.textContent = text;
        qrLength.textContent = text.length;
        qrResult.classList.remove('hidden');
        generateBtn.disabled = false;
    }
    
    function hideAllResults() {
        loadingSpinner.classList.add('hidden');
        errorMessage.classList.add('hidden');
        qrResult.classList.add('hidden');
    }
    
    // Initialize
    generateBtn.disabled = true;
    clearBtn.disabled = true;
    textInput.focus();
    
    // Add some sample text suggestions
    const suggestions = [
        'https://www.example.com',
        'Hello, World!',
        'Contact: +1-234-567-8900',
        'WiFi:T:WPA;S:MyNetwork;P:MyPassword;;'
    ];
    
    // Add placeholder rotation
    let placeholderIndex = 0;
    setInterval(() => {
        if (textInput.value === '') {
            textInput.placeholder = `Try: "${suggestions[placeholderIndex]}"`;
            placeholderIndex = (placeholderIndex + 1) % suggestions.length;
        }
    }, 3000);
});