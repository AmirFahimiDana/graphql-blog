import { Button, Grid, Typography, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SEND_COMMENT } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "../shared/validate";
import styles from "./CommentForm.module.css";

const CommentForm = ({ slug }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(formData));
  }, [formData, touched]);

  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: {
      name: formData.name,
      email: formData.email,
      text: formData.text,
      slug,
    },
  });

  const sendHandler = () => {
    if (formData.name && formData.email && formData.text) {
      sendComment();
      setSent(true);
    } else {
      toast.warn("لطفا همه فیلد های ستاره دار را پر کنید", {
        position: "top-center",
      });
      setTouched({
        name: true,
        email: true,
        text: true,
      });
    }
  };

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  if (data && sent && !Object.keys(errors).length) {
    toast.success("کامنت ارسال شد و منتظر تایید میباشد", {
      position: "top-center",
    });
    setSent(false);
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%"}}
          value={formData.name}
          name="name"
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.name && touched.name && <span className={styles.span}>{errors.name}</span>}
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{
            width: "100%",
          }}
          value={formData.email}
          name="email"
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.email && touched.email && <span  className={styles.span}>{errors.email}</span>}
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          value={formData.text}
          name="text"
          onChange={changeHandler}
          onFocus={focusHandler}
          multiline
          minRows={4}
        />
        {errors.text && touched.text && <span  className={styles.span}>{errors.text}</span>}
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <button variant="contained" disabled>
            در حال ارسال ...
          </button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
