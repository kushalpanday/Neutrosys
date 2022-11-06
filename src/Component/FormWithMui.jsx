// import "./styles.css";
import { TextField, Button, Box } from "@mui/material";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
export default function FormWithMui() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        {/* <Button variant="contained" value="A" name="A" {...register("A")}>
          A
        </Button>
        <Button variant="contained" value="B" name="B" {...register("B")}>
          B
        </Button>
        <Button variant="contained" value="C" name="C" {...register("C")}>
          C
        </Button>
        <Button variant="contained" value="D" name="D" {...register("D")}>
          D
        </Button>
        <Button variant="contained" value="E" name="E" {...register("E")}>
          E
        </Button> */}
        <TextField
          // required
          fullWidth
          label="Name"
          margin="dense"
          name="name"
          className="textfield"
          // value={myForm.values.name}
          // onChange={myForm.handleChange}
          // error={!!myForm.errors.companyName}
          // helperText={myForm.errors.name}
          autoComplete="off"
          {...register("name", { required: "Required", minLength: 3 })}
          error={!!errors?.name}
          helperText={errors?.name ? errors.name.message : null}
        />

        <TextField
          // required
          fullWidth
          label="Email"
          margin="dense"
          name="email"
          className="textfield"
          autoComplete="off"
          {...register("email", {
            required: "Required field",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={!!errors?.email}
          helperText={errors?.email ? errors.email.message : null}
        />
        <div className="tel">
          <TextField
            // fullWidth
            label="Country Code"
            margin="dense"
            name="country_code"
            autoComplete="off"
            className="txtfield_country_code"
            {...register("country_code")}
          />
          <TextField
            // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            type="number"
            // fullWidth
            label="Phone"
            margin="dense"
            name="phone"
            autoComplete="off"
            className="txtfield_phone"
            {...register("phone")}
          />
        </div>
        <TextField
          fullWidth
          label="Location"
          margin="dense"
          name="location"
          autoComplete="off"
          {...register("location")}
        />
        <TextField
          fullWidth
          label="Subject"
          margin="dense"
          name="subject"
          // value={myForm.values.subject}
          // onChange={myForm.handleChange}
          // error={!!myForm.errors.companyName}
          // helperText={myForm.errors.subject}
          autoComplete="off"
          {...register("subject")}
        />
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Message"
          margin="dense"
          name="message"
          // value={myForm.values.message}
          // onChange={myForm.handleChange}
          // error={!!myForm.errors.companyName}
          // helperText={myForm.errors.message}
          autoComplete="off"
          {...register("message")}
        />
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
            color="success"
            variant="contained"
            component="span"
            className="file_button"
          >
            {/* <AiOutlineUpload className="uploadIcon" /> */}
            upload files
          </Button>
          {/* <small style={{ color: "#b1a40d" }}>Upload file </small> */}
        </label>
        <Button
          style={{ display: "block", margin: "auto", width: "7rem" }}
          // disabled={!myForm.isValid}
          // onClick={myForm.submitForm}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
