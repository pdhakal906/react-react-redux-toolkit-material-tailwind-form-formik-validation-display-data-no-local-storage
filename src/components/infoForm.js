import {
  Input,
  Checkbox,
  Button,
  Typography,
  Select, Option,
  Textarea,
  Radio,

} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';

import { useNavigate } from "react-router";
import { addInfo } from "../features/infoSlice";




const InfoForm = () => {


  const dispatch = useDispatch();
  const nav = useNavigate()

  const valSchema = Yup.object().shape({
    username: Yup.string().max(20).min(6).required("username is required"),
    email: Yup.string().email().required("email is required"),
    hobby: Yup.array().min(1, "Hobby is required").required("hobby is required"),
    country: Yup.string().required("country is required"),
    gender: Yup.string().required("gender is required"),
    msg: Yup.string().required('message is required')
    // image: Yup.mixed().required('image is required').test('File_type', 'invalid', (val) => val && ['image/png'].includes(val.type))

  })


  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      hobby: [],
      country: '',
      gender: '',
      msg: '',
      preview: ''

    },
    onSubmit: (val) => {
      // console.log(val)
      dispatch(addInfo(val));
      nav(-1)
    },

    validationSchema: valSchema

  });



  const checkData = [
    { label: 'Dance', name: 'dance', value: 'dance', color: 'blue', id: 'dance' },
    { label: 'Sing', name: 'sing', value: 'sing', color: 'red', id: 'sing' },
    { label: 'Coding', name: 'coding', value: 'coding', color: 'green', id: 'coding' },
    { label: 'Music', name: 'music', value: 'music', color: 'teal', id: 'music' },
  ];


  const selectData = [
    { label: 'Nepal', value: 'nepal' },
    { label: 'India', value: 'india', },
    { label: 'China', value: 'china', },
    { label: 'USA', value: 'USA' },
  ];

  return (
    <div className="max-w-xl shadow-2xl px-12 py-9 mx-auto ">

      <Typography color="gray" className="my-3 mb-6 text-2xl">
        Enter your Info
      </Typography>
      <form onSubmit={formik.handleSubmit} className="">
        <div className="mb-4 flex flex-col gap-3">

          <div>
            {/* name should be whatever that is inside formik */}
            <Input
              onChange={formik.handleChange}
              value={formik.values.username}
              name="username"
              size="lg"
              label="Name"
              type="text"
              error={formik.errors.username && formik.touched.username ? true : false}
            />
            {formik.errors.username && formik.touched.username && <h1 className="text-red-600" >{formik.errors.username}</h1>}

          </div>

          <div>
            <Input
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              size="lg"
              label="Email"
              type="email"
              error={formik.errors.email && formik.touched.email ? true : false} />
            {formik.errors.email && formik.touched.email && <h1 className="text-red-600" >{formik.errors.email}</h1>}

          </div>

          <div className="space-y-2">
            <h1>Select Your Gender</h1>
            <Radio
              onChange={formik.handleChange}
              id="male"
              name="gender"
              label="Male"
              value="male" />
            <Radio
              onChange={formik.handleChange}
              id="female"
              name="gender"
              label="Female"
              value="female" />
            {formik.errors.gender && formik.touched.gender && <h1 className="text-red-600" >{formik.errors.gender}</h1>}

          </div>


          <div className="space-y-2">
            <h1>Select Your Hobbies</h1>

            {checkData.map((c, i) => {
              return <Checkbox
                onChange={formik.handleChange}
                key={i}
                color={c.color}
                label={c.label}
                name="hobby"
                id={c.id}
                value={c.value} >

              </Checkbox>
              // return <Checkbox onChange={(e) => console.log(e.target.value)} key={i} color={c.color} label={c.label} name={c.name} id={c.id} value={c.value} ></Checkbox>
            })}
            {formik.errors.hobby && formik.touched.hobby && <h1 className="text-red-600" > {formik.errors.hobby}</h1>}
          </div>


          <div className="space-y-2">
            <h1>Select Your Country</h1>
            <Select label="Select Country"
              onChange={(e) => formik.setFieldValue('country', e)}>
              {/* <Select label="Select Country" onChange={(e) => {
                console.log(e)
              }}> */}
              {selectData.map((c, i) => {
                return <Option value={c.value} key={i}>{c.label}</Option>
              })}


            </Select>

            {formik.errors.country && formik.touched.country && <h1 className="text-red-600" >{formik.errors.country}</h1>}

          </div>

          <div >
            <Textarea name="msg" onChange={formik.handleChange} value={formik.values.msg} label="Message" />
            {formik.errors.msg && formik.touched.msg && <h1 className="text-red-600" >{formik.errors.msg}</h1>}
          </div>


          <div >
            {/* 
            <Input onChange={(e) => {
              console.log(e.target.files)
            }} size="lg" name="image" label="Select Image" type="file" /> */}
            <Input onChange={(e) => {
              const file = e.target.files[0];
              // formik.setFieldValue('image', file);
              const reader = new FileReader();
              reader.readAsDataURL(file);
              // reader.addEventListener('load', (e) => {
              //   console.log(e);
              // })

              // reader.addEventListener('load', (e) => {
              //   console.log(e.target.result);
              // })

              reader.addEventListener('load', (e) => {
                formik.setFieldValue('preview', e.target.result);
              })

            }}
              size="lg"
              name="image"
              label="Select Image"
              type="file" />
            {formik.errors.image && formik.touched.image && <h1 className="text-red-600" >{formik.errors.image}</h1>}
          </div>

          {formik.values.preview && <img className="h-[200px]" src={formik.values.preview} alt="" />}


        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>

    </div>
  )
}
export default InfoForm