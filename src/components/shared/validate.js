export const validate = (data) => {
  const errors = {};

  if (!data.email) {
    errors.email = "*لطفا آدرس ایمیل را وارد کنید";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "*فرمت آدرس ایمیل صحیح نمیباشد";
  } else {
    delete errors.email;
  }

  if (!data.name.trim()) {
    errors.name = "*نام کاربری را وارد کنید";
  } else if (data.name.length < 6) {
    errors.name = "*نام کاربری باید حداقل 6 کاراکتر باشد";
  } else {
    delete errors.name;
  }

  if (!data.text.trim()) {
    errors.text = "*متن کامنت را وارد کنید";
  } else {
    delete errors.text;
  }

  return errors;
};
