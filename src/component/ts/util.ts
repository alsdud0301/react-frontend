// 비밀번호 유효성 검사 함수
export const validatePassword = (password: string): string | null => {
  const pwRegexp =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$])[A-Za-z\d!#$]{4,8}$/
  return pwRegexp.test(password) ? null : "비밀번호의 형식이 맞지 않습니다."
}

export const ConfirmPassword = (
  password: string,
  confirmpassword: string
): string | null => {
  return password.match(confirmpassword) ? null : "비밀번호가 일치하지않습니다"
}
// 이메일 유효성 검사 함수
export const validateEmail = (email: string): string | null => {
  const regexp = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]/
  return regexp.test(email) ? null : "이메일의 형식이 아닙니다."
}

// 아이디 유효성 검사 함수
export const validateId = (id: string): string | null => {
  const isValid = id.length >= 6 && id.length <= 15
  return isValid ? null : "아이디는 6~15글자입니다."
}

// 예시: 이름 유효성 검사
export const validateName = (name: string): any | null => {
  return name ? null : "이름을 입력하세요."
}

//성별 클릭
export const genderLabel = (
  femaleLabelRef: React.RefObject<HTMLLabelElement>,
  maleLabelRef: React.RefObject<HTMLLabelElement>,
  gender: string
): any | null => {
  if (maleLabelRef.current && femaleLabelRef.current) {
    const male = gender === "male"

    // 라벨 스타일 변경
    maleLabelRef.current.style.backgroundColor = male ? "white" : "black"
    maleLabelRef.current.style.color = male ? "black" : "white"
    femaleLabelRef.current.style.backgroundColor = male ? "black" : "white"
    femaleLabelRef.current.style.color = male ? "white" : "black"
  }
  console.log(gender)
  return gender ? null : "성별을 선택해주세요"
}
