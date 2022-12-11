import React from "react";
import { TextField, Button } from "@mui/material";
import "./Form.css";
import {Controller, useForm } from "react-hook-form";
const FormEl = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    resetField,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
    resetField();
  };
  return (
    <div className="form-container">
      <div className="form-left">
        <h2 className="frompara">REQUEST TALENTS</h2>
        <p className="spanclass">
          Please fill out the form with your details. We will contact you soon.
        </p>

        <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-basic"
            className="textfield"
            label="Your Full Name"
            fullWidth
            variant="filled"
            size="small"
            margin="dense"
            name="name"
            autoComplete="off"
            sx={{
              "& .MuiFilledInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:after": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
            }}
            {...register("name", { required: "Required", minLength: 3 })}
            error={!!errors?.name}
          />

          <TextField
            id="outlined-basic"
            className="textfield"
            label="Your Email"
            fullWidth
            variant="filled"
            size="small"
            margin="dense"
            name="email"
            autoComplete="off"
            sx={{
              "& .MuiFilledInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:after": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
            }}
            {...register("email", {
              required: "Required field",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors?.email}
          />

          <TextField
            id="outlined-basic"
            label="Phone Number"
            className="textfield"
            fullWidth
            variant="filled"
            size="small"
            margin="dense"
            name="phoneNumber"
            autoComplete="off"
            sx={{
              "& .MuiFilledInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:after": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
            }}
            {...register("phoneNumber")}
          />
          <div className="wrap">
            <div className="first">
              <div className="apple">
                <TextField
                  id="outlined-basic"
                  label="Company Name"
                  className="textfield"
                  variant="filled"
                  size="small"
                  margin="dense"
                  name="CompanyName"
                  autoComplete="off"
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("CompanyName")}
                />

                <TextField
                  id="outlined-basic"
                  label="Job Title"
                  className="textfield"
                  variant="filled"
                  size="small"
                  margin="dense"
                  name="Job"
                  autoComplete="off"
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("Job")}
                />
              </div>
            </div>
            <div className="second">
              <div className="country">
                <TextField
                  id="outlined-basic"
                  label="Country"
                  className="textfield"
                  variant="filled"
                  size="small"
                  margin="dense"
                  name="Country"
                  autoComplete="off"
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("Country")}
                />

                <TextField
                  id="outlined-basic"
                  label="City/State"
                  className="textfield"
                  variant="filled"
                  size="small"
                  name="city"
                  margin="dense"
                  autoComplete="off"
                  sx={{
                    "& .MuiFilledInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("city")}
                />
              </div>
            </div>
          </div>
          {/* <TextField
            fullWidth
            multiline
            rows={3}
            label="Message"
            margin="dense"
            name="message"
            variant="filled"
            placeholder="Your Message"
            className="txtfield_country_code"
            autoComplete="off"
            sx={{
              "& .MuiFilledInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:after": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
            }}
            {...register("message")}
          /> */}

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Message"
            margin="dense"
            name="message"
            variant="filled"
            placeholder="Your Message"
            className="txtfield_country_code"
            // value={myForm.values.message}
            // onChange={myForm.handleChange}
            // error={!!myForm.errors.companyName}
            // helperText={myForm.errors.message}
            autoComplete="off"
            sx={{
              "& .MuiFilledInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:after": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
            }}
            {...register("message")}
          />
          <div className="form-file">
            <label htmlFor="upload_file">
              <input
                style={{ display: "none" }}
                id="upload_file"
                name="upload_file"
                type="file"
                // value={formValues.upload_file}
                // value={""}
                // onChange={handleChange}
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/png, image/jpeg,.pdf"
                {...register("upload_file")}
              />
              <Button
                // color="success"
                variant="contained"
                component="span"
                className="file_button mt-3"
              >
                {/* <AiOutlineUpload className="uploadIcon" /> */}
                upload files
              </Button>

              {/* <small style={{ color: "#b1a40d" }}>Upload file </small> */}
            </label>
          </div>

          <Controller
        type="file"
        name="photo"
        control={control} 
        // render={({ field }) => (
        //   <input
        //     type="file"
        //     onChange={(e) => {
        //       field.onChange(e.target.files);
        //     }}
        //     // multiple
        //   />
        // )}
        render={({ field }) => (
          <TextField
            // {...field}
            // inputRef={ref}
            fullWidth
            label="photo"
            margin="dense"
            accept="image/*"
            type="file"
            onChange={(e) => {
              field.onChange(e.target.files);
            }}
            // error={errors.photo ? true : false}
            InputLabelProps={{
              shrink: true
            }}
          />
        )}
      />
          <div className="button">
            <Button
              className="btn btn-primary mt-4"
              style={{
                display: "block",
                margin: "auto",
                width: "6rem",
                color: "black",
                backgroundColor: "#6acaffab",
              }}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>

      <div className="form-right">
        <h2 className="connected">Let's get connected!</h2>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          accusamus nulla repellat consectetur eveniet iure saepe aperiam nemo,
          assumenda harum odio, ipsa recusandae error facere enim neque labore.
          Architecto, alias?
        </p>
        <h5 className="contact-details">Contact Details</h5>
        <div className="contact-container">
          <div className="contact">
            <div className="icon-container">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="icon-text">+977-71-577820</div>
          </div>

          <div className="contact">
            <div className="icon-container">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="icon-text">info@neutroline.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEl;
