import React, { useRef } from "react";
import "./form.css";
import ReCAPTCHA from "react-google-recaptcha";
import { TextField, Button, ButtonGroup } from "@mui/material";
// import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown"; //multiselect Library
import { ErrorMessage } from "@hookform/error-message";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import checkboxClasses from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";
import { style } from "@mui/system";
import { pink } from "@mui/material/colors";
// import Switch from '@mui/material/Switch';
import Submission from "./Submission";
import swal from "sweetalert";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";

const Formservice = () => {
  const [options, setOptions] = useState([
    "Talent Solutions",
    "Out Sourcing",
    "Software Testing",
    "Software QA",
  ]);

  const captchaRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    control,

    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    reset();
    resetField();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    // swal("Form has been Submitted");
    toast.success("Success\n your form has been submitted");
  };
  const onCaptchaComplete = (response) => {
    console.log(response);
  };
  const optionSelect = [
    { value: "Talent Solutions", label: "Talent Solutions" },
    { value: "Out Sourcing", label: "Out Sourcing" },
    { value: "Software Testing", label: "Software Testing" },
    { value: "Software QA", label: "Software QA" },
  ];

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const selectCountry = (val) => setCountry(val);
  const selectRegion = (val) => {
    setRegion(val);
  };

  return (
    <div className="services-form-container">
      {" "}
      <div className="mainForm">
        <ToastContainer position="top-center" />
        <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
          <Row
            className="form-row m-0"
            style={{ height: "auto", width: "auto" }}
          >
            <Col sm={12} lg={12} md={12} className="form-col ">
              <Container className=" formContainer">
                <p className="heading-para">I'm interested in..</p>

                {/* <Multiselect
                  className="textfields"
                  name="interestField"
                  isObject={false}
                  options={options}
                  displayValue="key"
                  onRemove={(event) => {
                    console.log(event);
                  }}
                  onSearch={(event) => {
                    console.log(event);
                  }}
                  onSelect={(event) => {
                    console.log(event);
                  }}
                  closeMenuOnSelect={true}
                  {...register("interestField")}
                /> */}

                <Select
                  isMulti
                  name="colors"
                  options={optionSelect}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  menuPortalTarget={document.body} 
                  styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                />

                <TextField
                  // required

                  fullWidth
                  label="Name"
                  margin="dense"
                  name="name"
                  className="textfield"
                  variant="filled"
                  placeholder="Your Name"
                  // value={myForm.values.name}
                  // onChange={myForm.handleChange}
                  // error={!!myForm.errors.companyName}
                  // helperText={myForm.errors.name}
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
                  {...register("name", { required: "Required", minLength: 3 })}
                  error={!!errors?.name}
                  // helperText={errors?.name ? errors.name.message : null}
                />

                <TextField
                  // required
                  fullWidth
                  label="Email"
                  margin="dense"
                  name="email"
                  className="textfield"
                  variant="filled"
                  placeholder="Your Email"
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
                  {...register("email", {
                    required: "Required field",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors?.email}
                />
                <div className="tel">
                  <TextField
                    // fullWidth
                    placeholder="Nepal +977"
                    label="Country Code"
                    margin="dense"
                    name="country_code"
                    autoComplete="off"
                    variant="filled"
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
                    className="txtfield_country_code"
                    {...register("country_code", { required: "Required" })}
                    error={!!errors?.country_code}
                  />
                  <TextField
                    // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}

                    // fullWidth
                    label="Phone"
                    margin="dense"
                    name="phone"
                    autoComplete="off"
                    variant="filled"
                    placeholder=" Landline/Mobile Number"
                    type="number"
                    className="txtfield_phone "
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
                    {...register("phone", { required: "Required" })}
                    error={!!errors?.phone}
                  />
                </div>
                <div className="country-region-services">
                <CountryDropdown
                      className="input-field select"
                      value={country}
                      style={{backgroundColor:"#e9ecef", borderRadius: "9px"}}
                      onChange={(val) => selectCountry(val)}
                    />
                <RegionDropdown
                      className="input-field select"
                      country={country}
                      value={region}
                    style={{backgroundColor:"#e9ecef", borderRadius: "9px"}}
                      blankOptionLabel="Select Region"
                      onChange={(val) => selectRegion(val)}
                    />
                    </div>
                <TextField
                  fullWidth
                  label="Location"
                  margin="dense"
                  name="location"
                  autoComplete="off"
                  variant="filled"
                  placeholder="Your Location"
                  className="txtfield_country_code"
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
                  {...register("location", { required: "Required" })}
                  error={!!errors?.location}
                />
                <TextField
                  fullWidth
                  label="Subject"
                  margin="dense"
                  name="subject"
                  variant="filled"
                  placeholder="Subject"
                  className="txtfield_country_code"
                  // value={myForm.values.subject}
                  // onChange={myForm.handleChange}
                  // error={!!myForm.errors.companyName}
                  // helperText={myForm.errors.subject}

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
                  {...register("subject", { required: "Required" })}
                  error={!!errors?.subject}
                />
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
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottom: "none",
                      },
                  }}
                  {...register("message", { required: "Required" })}
                  error={!!errors?.message}
                />
                <div style={{ display: "flex"}}>
                  <label htmlFor="upload_file">
                    <input
                      style={{ display: "none" }}
                      id="upload_file"
                      name="file"
                      type="file"
                      // value={formValues.upload_file}
                      // value={""}
                      // onChange={handleChange}
                      accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/png, image/jpeg,.pdf"
                      {...register("file", {
                        validate: {
                          lessThan10MB: (files) =>
                            files[0]?.size < 100000000 || "Max 10 MB",
                          // Morethan0kb: files=>files[0]?.size > 0 || 'Min 0 kb',

                          acceptedFormats: (files) =>
                            [
                              "image/jpeg",
                              "image/png",
                              ".pdf",
                              ".doc",
                              ".docx",
                              "application/msword",
                            ].includes(files[0]?.type) ||
                            "Only PNG, JPEG e doc docx msword",
                        },
                      })}
                    />
                    <Button
                      // color="light"
                      variant="contained"
                      component="span"
                      className="file_button mt-3"
                    >
                      {/* <AiOutlineUpload className="uploadIcon" /> */}
                      upload files
                    </Button>
                    {/* <small style={{ color: "#b1a40d" }}>Upload file </small> */}
                    <ErrorMessage
                      className="errormsg"
                      errors={errors}
                      name="upload_file"
                      render={({ message }) => (
                        <p className="errorm">{message}</p>
                      )}
                    />
                  </label>
                </div>
                <div style={{ marginTop: 15, marginBottom: 8 }}>
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    ref={captchaRef}
                    onChange={onCaptchaComplete}
                    // style={{ padding: 6 }}
                    className="my-recaptcha"
                  />
                </div>
                <div className="buttonsubmit">
                  <Button
                    style={{
                      display: "block",
                      margin: "auto",
                      width: "7rem",
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
              </Container>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default Formservice;