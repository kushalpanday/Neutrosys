import React from "react";
import { TextField, Button } from "@mui/material";
import "./Form.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const FormEl = () => {
  const {
    register,
    handleSubmit,
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
    <div className="container">
      <div className="form-left">
        <h2>REQUEST TALENTS</h2>
        <p className="form-paragraph">
          Please fill out the form with your details. We will contact you soon.
        </p>
        {/* <form action=""> */}
        {/* <input type="text" placeholder='Your Full Name' />
                  <input type="email" name="" id="" placeholder='Your Email' />
                  <input type="number" name="" id="" placeholder="Phone Number" /> */}
        <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              id="outlined-basic"
              className="textfield"
              label="Your Full Name"
              fullWidth
              variant="filled"
              size="small"
              margin="dense"
              name="name"
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
              // helperText={errors?.name ? errors.name.message : null}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              className="textfield"
              label="Your Email"
              fullWidth
              variant="filled"
              size="small"
              margin="dense"
              name="email"
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
              // helperText={errors?.email ? errors.email.message : null}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              className="textfield"
              fullWidth
              variant="filled"
              size="small"
              margin="dense"
              name="phoneNumber"
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
          </div>
          <div className="wrap">
            <div className="first">
              {/* <input type="text" placeholder = "Company Name"/>
                          <input type="text" placeholder = "Job Title"/> */}
              <div>
                <TextField
                  id="outlined-basic"
                  label="Company Name"
                  className="textfield"
                  variant="filled"
                  size="small"
                  margin="dense"
                  name="CompanyName"
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
              </div>

              <div>
                <TextField
                  id="outlined-basic"
                  label="Job Title"
                  className="textfield"
                  variant="filled"
                  size="small"
                  margin="dense"
                  name="Job"
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
                {/* <input type="text" placeholder = "Country"/>
                                <input type="text" placeholder="City/State" /> */}
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Country"
                    className="textfield"
                    variant="filled"
                    size="small"
                    margin="dense"
                    name="Country"
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
                </div>

                <div>
                  <TextField
                    id="outlined-basic"
                    label="City/State"
                    className="textfield"
                    variant="filled"
                    size="small"
                    name="city"
                    margin="dense"
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
          </div>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Message"
            margin="dense"
            name="message"
            variant="filled"
            placeholder="Your Meassage"
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
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/jpeg,.pdf"
                {...register("upload_file",{required: "This is a required field"})}
              />
              <Button
                color="success"
                variant="contained"
                component="span"
                className="file_button mt-3"
              >
              
                {/* <AiOutlineUpload className="uploadIcon" /> */}
                upload files
              </Button>
              <ErrorMessage
                  errors={errors}
                  name="upload_file"
                  render={({ message }) => <p>{message}</p>}
                
                />
              {/* <small style={{ color: "#b1a40d" }}>Upload file </small> */}
            </label>
          </div>
          <div className="button">
            <Button
              className="btn btn-primary mt-4"
              style={{
                display: "block",
                margin: "auto",
                width: "8rem",
                color: "white",
                backgroundColor: "#3b6da7",
              }}
              // disabled={!myForm.isValid}
              // onClick={myForm.submitForm}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>

      <div className="form-right">
        <div className="connected">Let's get connected!</div>
        <div className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          accusamus nulla repellat consectetur eveniet iure saepe aperiam nemo,
          assumenda harum odio, ipsa recusandae error facere enim neque labore.
          Architecto, alias?
        </div>
        <div className="contact-details">Contact Details</div>
        <br />
        <div className="contact">
          <div className="icon-container">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div className="icon-text">+977-71-577820</div>
        </div>

        <div className="contact">
          <div className="icon-container">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div className="icon-text">info@neutroline.com</div>
        </div>
      </div>
    </div>
  );
};

export default FormEl;
