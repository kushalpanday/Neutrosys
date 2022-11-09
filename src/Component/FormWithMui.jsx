// import "./styles.css";
import { TextField, Button, Box ,ButtonGroup } from "@mui/material";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
export default function FormWithMui() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
    resetField()
  };

  return (
    <><form className="form_container" onSubmit={handleSubmit(onSubmit)}>
    <Row className="form-row mb-4">
        <Col sm={9} className="form-col">
          <h4 className="heading-form">Contact Us</h4>
          <p className="heading-para">I'm interested in..</p>
          <Row className="field-row1">
          {/*<Col sm={2} className="field-col1">
          <Button  name="interest" value="TalentSolution" 
          {...register("interest")}>Talent Solutions</Button>
        </Col>

        <Col sm={2} className="field-col1">
          <Button name="interest" value="Software Development" 
          {...register("interest")}>Software Development</Button>
        </Col>

        <Col sm={2} className="field-col1">
          <Button name="interest" value="outSourcing" 
          {...register("interest")}>Outsourcing</Button>
        </Col>

        <Col sm={2} className="field-col1">
          <Button name="interest" value="Software Testing" 
          {...register("interest")}>Software Testing</Button>
        </Col>

        <Col sm={2} className="field-col1">
          <button  name="interest" value="Looking for a job" 
          {...register("interest")}>Looking for a job</button>
        </Col>

        <Col sm={2} className="field-col1">
          <button  name="interest" value="Other" 
          {...register("interest")}>Other</button>
  </Col> */}


  <Col sm={2} className="field-col1">
  <FormGroup className="formgroup-check" row={true} >
  <FormControlLabel  control={<ButtonGroup   />} name="interest" value="Software Development" 
  {...register("interest")} label="Software Development" />
  <FormControlLabel control={<Checkbox />} name="interest" value="outSourcing" 
  {...register("interest")} label="outSourcing" />
  <FormControlLabel  control={<Checkbox />} name="interest" value="Software Testing" 
  {...register("interest")} label="Software Testing" />
  <FormControlLabel control={<Checkbox />} name="interest" value="Looking for a job" 
  {...register("interest")} label="Looking for a job" />
  <FormControlLabel  control={<Checkbox />} name="interest" value="Other" 
  {...register("interest")} label="other" />
</FormGroup>
  </Col>
          </Row>
          <Container className="mt-4 mb-5 formContainer">
      
      
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
          color="secondary" 
          label="Name"
          margin="dense"
          name="name"
          className="textfield"
          variant="filled"
          
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
          variant="filled"
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
            variant="filled"
            
            className="txtfield_country_code"
            {...register("country_code")}
          />
          <TextField
            // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            
            placeholder="+977"
            // fullWidth
            label="Phone"
            margin="dense"
            name="phone"
            autoComplete="off"
            variant="filled"
            className="txtfield_phone txtfield_country_code"
            {...register("phone")}
          />
        </div>
        <TextField
          fullWidth
          label="Location"
          margin="dense"
          name="location"
          autoComplete="off"
          variant="filled"
          className="txtfield_country_code"
          {...register("location")}
        />
        <TextField
          fullWidth
          label="Subject"
          margin="dense"
          name="subject"
          variant="filled"
          className="txtfield_country_code"
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
          variant="filled"
          className="txtfield_country_code"
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
            className="file_button mt-3"
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
      
    </Container>
        </Col>
      </Row>
      </form>
    
    </>
  );
}
