document.getElementById('submitBtn').addEventListener('click', function() {
    const disagree = document.querySelector('input[name="privacy"][value="disagree"]:checked');
    if (disagree) {
      alert('개인정보처리방침에 동의해 주세요.');
      return;
    }
  
    const form = document.getElementById('contact-form');
    if (!form.name.value.trim() || !form.email.value.trim() || !form.message.value.trim()) {
      alert('필수 입력 항목을 모두 입력해 주세요.');
      return;
    }
  
    // 폼 제출 (예시: 실제로는 서버로 전송하는 코드가 들어가야 함)
    // form.submit(); // 서버로 전송하려면 이 줄을 사용
    alert('문의가 정상적으로 접수되었습니다.');
    form.reset();
    document.querySelector('input[name="privacy"][value="disagree"]').checked = true;
  });
  