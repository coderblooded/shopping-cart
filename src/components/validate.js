export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "فیلد ایمیل اجباری است";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "ایمیل شما نامعتبر میباشد";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "فیلد رمز عبور اجباری است";
  } else if (data.password.length < 6) {
    errors.password = "رمز عبور شما باید بیشتر از 6 کاراکتر باشد";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "فیلد نام اجباری است";
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "تایید رمز عبور";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "رمز عبور ها یکی نیستند";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "شرایط را قبول کنید.";
    }
  }

  return errors;
};
