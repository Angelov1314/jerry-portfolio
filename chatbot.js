/* ========================================
   Portfolio Chatbot — Claude Haiku
   ======================================== */

const CHAT_API = '/api/chat'; // proxy endpoint

const chatFab = document.getElementById('chatFab');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatExamples = document.getElementById('chatExamples');

let conversationHistory = [];

// Toggle chat window
chatFab.addEventListener('click', () => {
  chatWindow.classList.add('open');
  chatFab.classList.add('hidden');
  chatInput.focus();
});

chatClose.addEventListener('click', () => {
  chatWindow.classList.remove('open');
  chatFab.classList.remove('hidden');
});

// Example question buttons
chatExamples.addEventListener('click', (e) => {
  const btn = e.target.closest('.chat-example-btn');
  if (!btn) return;
  const question = btn.dataset.q;
  chatInput.value = question;
  sendMessage();
});

// Send on Enter
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

chatSend.addEventListener('click', sendMessage);

async function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  // Hide examples after first message
  if (chatExamples) chatExamples.remove();

  // Add user message
  appendMessage(text, 'user');
  chatInput.value = '';
  chatSend.disabled = true;

  // Add to history
  conversationHistory.push({ role: 'user', content: text });

  // Show loading
  const loading = appendLoading();

  try {
    const res = await fetch(CHAT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: conversationHistory })
    });

    if (!res.ok) throw new Error(`API error: ${res.status}`);

    const data = await res.json();
    const reply = data.content || data.reply || 'Sorry, I couldn\'t process that.';

    loading.remove();
    appendMessage(reply, 'bot');
    conversationHistory.push({ role: 'assistant', content: reply });
  } catch (err) {
    loading.remove();
    appendMessage('Sorry, I\'m currently unavailable. Please reach out to Jerry directly at jerry.yang.data@gmail.com.', 'bot');
    console.error('Chat error:', err);
  }

  chatSend.disabled = false;
  chatInput.focus();
}

function appendMessage(text, sender) {
  const div = document.createElement('div');
  div.className = `chat-msg chat-msg-${sender}`;
  const p = document.createElement('p');
  p.textContent = text;
  div.appendChild(p);
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

function appendLoading() {
  const div = document.createElement('div');
  div.className = 'chat-msg chat-msg-loading';
  div.innerHTML = '<div class="chat-dots"><span></span><span></span><span></span></div>';
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}
