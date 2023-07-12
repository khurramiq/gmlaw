import React, { useEffect } from 'react';
import moment from 'moment';

const FormDataPreview = ({
  step,
  data,
  setData,
  activeStep,
  setStep,
  setActiveStep,
  setPreviewOpen,
}) => {
  // const pdfContainerRef = useRef();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  // const handleDownloadPDF = () => {
  //   const pdfContainer = pdfContainerRef.current;
  //   const blob = new Blob([pdfContainer], { type: 'application/pdf' });
  //   saveAs(blob, 'form_data_preview.pdf');
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('data', data);
  };

  return (
    <div className="w-[90%] m-auto pb-10">
      {/* <Step1
        data={data}
        setData={setData}
        activeStep={activeStep}
        setStep={setStep}
        setActiveStep={setActiveStep}
        notActionBtns
      /> */}
      <h1 className="text-3xl font-bold">YOUR INFORMATION</h1>
      <h3 className="text-2xl font-[500]">Your Name</h3>
      <p>
        <strong>First Name:</strong>
        &nbsp;{data?.personalInfo?.yourInfo?.firstName}&nbsp;
        <strong>Middle Name:</strong>
        &nbsp;{data?.personalInfo?.yourInfo?.middleName}&nbsp;
        <strong>Last Name:</strong>
        &nbsp;{data?.personalInfo?.yourInfo?.lastName}&nbsp;
      </p>
      <h3 className="text-2xl font-[500]">Mailing Address</h3>
      <p>
        <strong>Address Line 1:</strong>
        &nbsp;{data?.personalInfo?.yourInfo?.addressLine1} <br />
        <strong>Address Line 2:</strong>
        &nbsp;{data?.personalInfo?.yourInfo?.addressLine2} <br />
        <strong>City:</strong>
        &nbsp;{data?.personalInfo?.yourInfo?.city} <br />
        <strong>State:</strong>
        &nbsp;{data?.personalInfo?.yourInfo?.state?.label} <br />
        <strong>Zip Code:</strong>
        &nbsp;{data?.personalInfo?.yourInfo?.zipCode} <br />
        <strong>Email:</strong>
        &nbsp;{data?.personalInfo?.yourInfo?.email} <br />
        <strong>Your Gender:</strong>
        &nbsp;{data?.personalInfo?.yourInfo?.gender} <br />
        <strong>State of Residency:</strong>
        &nbsp;{data?.personalInfo?.yourInfo?.stateOfResidency} <br />
        <strong>County of Residency:</strong>
        &nbsp;{data?.personalInfo?.yourInfo?.countyOfResidency} <br />
        <strong>Country of Citizenship:</strong>
        &nbsp;{data?.personalInfo?.yourInfo?.countryOfCitizenship} <br />
      </p>
      {/* <Step2
        data={data}
        setData={setData}
        activeStep={activeStep}
        setStep={setStep}
        setActiveStep={setActiveStep}
        notActionBtns
      /> */}
      <h1 className="mt-3 font-bold">
        FROM THE LIST BELOW, SELECT THE DOCMENT(S) OR THE PACKAGE THAT BEST FITS
        YOUR NEEDS.
      </h1>
      <p>
        The package or documents selected will dictate the questions that
        follow.
      </p>
      <h3 className="mb-1 font-bold">
        {/* ESTATE PLANNING PACKAGES (insert prices for each set of documents) */}
        {data.personalInfo.estatePlanningPackages.question}
      </h3>
      <div className="space-y-2">
        {data.personalInfo.estatePlanningPackages.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label key={i} className="w-[33%]">
              <input
                type="checkbox"
                checked={item.value}
                onChange={() => {}}
                className="form-checkbox h-5 w-[30px] text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
        <p>
          Documents needed to transfer title of property you own to your Trust.{' '}
        </p>
      </div>
      <p>Only select one. The package will determine the documents created.</p>
      <h3 className="mb-1 font-bold">
        {/* INDIVIDUAL ESTATE PLANNING DOCUMENTS */}
        {data.personalInfo.individualEstatePlanningDocuments.question}
      </h3>
      <div className="space-y-2">
        {data.personalInfo.individualEstatePlanningDocuments.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label key={i} className="w-[33%]">
              <input
                type="checkbox"
                checked={item.value}
                onChange={() => {}}
                className="form-checkbox h-5 w-[30px] text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
        <p>
          Documents needed to transfer title of property you own to your Trust.{' '}
        </p>
      </div>
      {/* <Step3
        data={data}
        setData={setData}
        activeStep={activeStep}
        setStep={setStep}
        setActiveStep={setActiveStep}
        notActionBtns
      /> */}
      <h3 className=" mt-3 font-bold">
        {/* SPECIAL IRREVOCABLE TRUSTS */}
        {data.personalInfo.specialIrrevocableTrusts.question}
      </h3>
      <div className="space-y-2">
        {data.personalInfo.specialIrrevocableTrusts.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label key={i} className="w-[33%]">
              <input
                type="checkbox"
                checked={item.value}
                onChange={() => {}}
                className="form-checkbox h-5 w-[30px] text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
        <p>
          Documents needed to transfer title of property you own to your Trust.{' '}
        </p>
      </div>
      <h3 className="mb-1 mt-2 font-bold">
        {/* TRUST TRANSFER DOCUMENTS */}
        {data.personalInfo.trustTransferDocuments.question}
      </h3>
      <div className="space-y-2">
        {data.personalInfo.trustTransferDocuments.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label key={i} className="w-[33%]">
              <input
                type="checkbox"
                checked={item.value}
                onChange={() => {}}
                className="form-checkbox h-5 w-[30px] text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
        <p>
          Documents needed to transfer title of property you own to your Trust.{' '}
        </p>
      </div>

      {/* <Step4
        data={data}
        setData={setData}
        activeStep={activeStep}
        setStep={setStep}
        setActiveStep={setActiveStep}
        notActionBtns
      /> */}
      <h1 className=" mt-2 font-bold text-center">LIVING TRUST PACKAGE</h1>
      <p>This set of documents includes the following:</p>
      <ul className="list-disc list-inside">
        <li>Living Trust Agreement;</li>
        <li>Certification of Trust;</li>
        <li>Assignment (transfer) of Personal Property to your Trust;</li>
        <li>Last Will and Testament;</li>
        <li>Durable Power of Attorney for finances;</li>
        <li>
          Health Care Power of Attorney and Living Will (sometimes called an
          Advance Health Care Directive); and
        </li>
        <li>HIPAA Confidentiality Waiver;</li>
      </ul>
      <h1 className="mb-1 font-bold text-center">DRAFTING YOUR DOCUMENTS</h1>
      <h1 className="mb-1 font-bold text-center">
        THERE ARE _____ SECTIONS, EACH CONTAINING A NUMBER OF QUESTIONS.
      </h1>
      <h1 className="mb-1 font-bold text-center">
        Anwer the questions accurately and completely and you will have a a well
        crafted document.
      </h1>
      <h1 className="mb-1 font-bold text-center">We promise!</h1>
      <p className="mb-1 text-center">
        YOU CAN TRACK YOUR PROGRESS ON THE PROGRSS BAR, AND YOU CAN STOP AND
        COME BACK AT ANY TIME WITHOUT LOSING YOUR PLACE.{' '}
      </p>
      <h1 className="mb-1 font-bold">SECTION ONE: TYPE OF TRUST</h1>
      <h3 className="mb-1 font-bold">
        {/* First,what type of trust are you creating? */}
        {data.personalInfo.creatingTrustType.question}
      </h3>
      <div className="space-y-2">
        {data.personalInfo.creatingTrustType.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label key={i} className="w-[33%]">
              <input
                type="checkbox"
                checked={item.value}
                onChange={() => {}}
                className="form-checkbox h-5 w-[30px] text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>

      {data.personalInfo.creatingTrustType.options[1].value && (
        <>
          <h1 className="text-center font-bold mt-5">
            First, we need to collect some information about your existing trust
          </h1>
          <h3 className="mb-1 mt-5 font-bold">
            What is the name of your existing trust?
          </h3>
          <p>
            <strong>Answer:</strong>&nbsp;
            {
              data?.personalInfo
                ?.first_we_need_to_collect_some_information_about_your_existing_trust
                ?.what_is_the_name_of_your_existing_trust
            }
          </p>
          <h3 className="mb-1 mt-5 font-bold">
            What is the date you signed your existing trust?
          </h3>
          <p>
            <strong>Answer:</strong>&nbsp;
            {
              data?.personalInfo
                ?.first_we_need_to_collect_some_information_about_your_existing_trust
                .what_is_the_date_you_signed_your_existing_trust
            }
          </p>
          <h3 className="mb-1 mt-5 font-bold">
            After you signed your trust, did you ever amend it?
          </h3>
          <div className="flex space-x-4">
            {data?.personalInfo?.first_we_need_to_collect_some_information_about_your_existing_trust.after_you_signed_your_trust_did_you_ever_amend_it
              .filter((item) => item.value === true)
              .map((item, i) => (
                <label key={i} className="flex items-center">
                  <input
                    type="radio"
                    checked={item.value}
                    onChange={() => {}}
                    className="form-radio h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{item.label}</span>
                </label>
              ))}
          </div>
          <h3 className="mb-1 mt-3 font-bold">
            Locate the paragraph or section number in your existing trust
            agreement that allows you to make amendments to your trust write the
            location below.
          </h3>
          <p>
            <strong>Answer:</strong>&nbsp;
            {
              data?.personalInfo
                ?.first_we_need_to_collect_some_information_about_your_existing_trust
                ?.locate_the_paragraph_or_section_number_in_your_existing_trust_agreement_that_allows_you_to_make_amendments_to_your_trust_write_the_location_below
            }
          </p>
          <h3 className="mb-1 mt-2 font-bold">
            Have you amended your Trust before?
          </h3>
          <div className="flex space-x-4">
            {data?.personalInfo?.first_we_need_to_collect_some_information_about_your_existing_trust.have_you_amended_your_Trust_before
              .filter((item) => item.value === true)
              .map((item, i) => (
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={item.value}
                    onChange={() => {}}
                    className="form-radio h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{item.label}</span>
                </label>
              ))}
          </div>
          <h3 className="mb-1 font-bold">
            What month you will sign the document(s) you are creating?
          </h3>
          <p>
            <strong>Answer:</strong>&nbsp;
            {
              data?.personalInfo
                ?.first_we_need_to_collect_some_information_about_your_existing_trust
                .what_month_you_will_sign_the_document_you_are_creating
            }
          </p>
          <h3 className="mb-1 font-bold">
            On what day of the month will you sign your documents
          </h3>
          <p>
            <strong>Answer:</strong>&nbsp;
            {
              data?.personalInfo
                ?.first_we_need_to_collect_some_information_about_your_existing_trust
                .on_what_day_of_the_month_will_you_sign_your_documents
            }
          </p>
        </>
      )}
      {data.personalInfo.creatingTrustType.options[0].value && (
        <>
          <h1 className="mt-3 font-bold text-lg">
            Creating your new revocable living trust.
          </h1>
          <h3 className="mb-1 font-bold">
            {/* What do you want to name your trust? */}
            {data.personalInfo.what_do_you_want_to_name_your_trust.question}
          </h3>
          <div className="space-y-2">
            {data.personalInfo.what_do_you_want_to_name_your_trust.options
              .filter((item) => item.value === true)
              .map((item, i) => (
                <label key={i} className="inline-blog">
                  <input
                    type="radio"
                    checked={item.value}
                    onChange={() => {}}
                    className="form-radio h-5 w-5 text-blue-500"
                    name="radio-option"
                    value="option1"
                  />
                  <span className="ml-1 text-gray-700 relative top-[-3px]">
                    {item.label}
                  </span>
                </label>
              ))}
          </div>
        </>
      )}
      <h1 className="mb-1 mt-5 text-3xl font-bold text-center">
        INITIAL TRUSTEE
      </h1>
      <h3 className="mb-1 font-bold">
        {data.personalInfo.initialTrustee.question}
      </h3>
      <div className="space-y-2 mb-5">
        {data.personalInfo.initialTrustee.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label key={i} className="inline-blog">
              <input
                type="radio"
                checked={item.value}
                onChange={() => {}}
                className="form-radio ml-2 h-5 w-5 text-blue-500"
                name="radio-option"
                value="option1"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>
      {data.personalInfo.initialTrustee.options[1].value && (
        <>
          <h1 className="text-lg font-bold mt-5">Co-Trustee</h1>
          <p>
            <strong>First Name:</strong>
            &nbsp;{data?.personalInfo?.coTrustee?.firstName}&nbsp;
            <strong>Middle Name:</strong>
            &nbsp;{data?.personalInfo?.coTrustee?.middleName}&nbsp;
            <strong>Last Name:</strong>
            &nbsp;{data?.personalInfo?.coTrustee?.lastName}&nbsp;
          </p>
        </>
      )}
      {data.personalInfo.initialTrustee.options[2].value && (
        <div>
          {data.personalInfo.coTrustees.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                {/* <i
                  className="far fa-times-circle cursor-pointer"
                  onClick={() => removeCoTrustee(i)}
                ></i> */}
                <span className="font-bold ml-3">Co-Trustee {i + 1}</span>
              </div>
              <h3 className="mb-1 font-bold">Name</h3>
              <p>
                <strong>First Name:</strong>
                &nbsp;{item.firstName}&nbsp;
                <strong>Middle Name:</strong>
                &nbsp;{item.middleName}&nbsp;
                <strong>Last Name:</strong>
                &nbsp;{item.lastName}&nbsp;
              </p>
              <div>
                <h3 className="mb-1 font-bold">Relationship</h3>
                <p>&nbsp;{item.relationship}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* <Step11
        step={step}
        setStep={setStep}
        data={data}
        setData={setData}
        notActionBtns={true}
      /> */}
      <h1 className="mb-1 mt-5 text-3xl font-bold">FAMILY</h1>
      <h3 className="mb-1 font-bold">
        {/* Your Marital Status */}
        {data.personalInfo.maritalStatus.question}
      </h3>
      <div className="space-y-2">
        {data.personalInfo.maritalStatus.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label key={i} className="inline-block">
              <input
                type="radio"
                checked={item.value}
                onChange={() => {}}
                className="form-radio ml-2 h-5 w-5 text-blue-500"
                name="radio-option"
                value="option1"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>

      <h3 className="mb-1 font-bold">
        {/* Do you have any living children? */}
        {data.personalInfo.livingChildren.question}
      </h3>
      <div className="space-y-2">
        {data.personalInfo.livingChildren.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label key={i} className="inline-block">
              <input
                type="checkbox"
                checked={item.value}
                onChange={() => {}}
                className="ml-2 form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>
      <h3 className="mb-1 font-bold">
        {/* Do you have any deceased children? */}
        {data.personalInfo.deceasedChildren.question}
      </h3>
      <div className="space-y-2">
        {data.personalInfo.deceasedChildren.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label key={i} className="inline-block">
              <input
                type="checkbox"
                checked={item.value}
                onChange={() => {}}
                className="ml-2 form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>
      {!data.personalInfo.livingChildren.options[0].value && (
        <div>
          <h3 className="mb-1 mt-3 font-bold">Living Children Information</h3>
          {data.personalInfo.livingChildrenInformation.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                <span className="font-bold">Child {i + 1}</span>
              </div>
              <h3 className="mb-1 font-bold">Name</h3>
              <p>
                <strong>First Name:</strong>
                &nbsp;{item?.firstName}&nbsp;
                <strong>Middle Name:</strong>
                &nbsp;{item?.middleName}&nbsp;
                <strong>Last Name:</strong>
                &nbsp;{item?.lastName}&nbsp;
              </p>

              <h3 className="mb-1 font-bold">Date of Birth</h3>
              <p>{moment(item?.dateOfBirth).format('MMMM Do YYYY')}</p>
            </div>
          ))}
        </div>
      )}
      {!data.personalInfo.deceasedChildren.options[0].value && (
        <div>
          <h3 className="mb-1 mt-3 font-bold">Deceased Children Information</h3>
          {data.personalInfo.deceasedChildrenInformation.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                <span className="font-bold">Child {i + 1}</span>
              </div>
              <h3 className="mb-1 font-bold">Name</h3>
              <p>
                <strong>First Name:</strong>
                &nbsp;{item?.firstName}&nbsp;
                <strong>Middle Name:</strong>
                &nbsp;{item?.middleName}&nbsp;
                <strong>Last Name:</strong>
                &nbsp;{item?.lastName}&nbsp;
              </p>

              <div className="mb-2 flex">
                <div className="w-[50%]">
                  <h3 className="mb-1 font-bold">Date of Birth</h3>
                  <p>{moment(item?.dateOfBirth).format('MMMM Do YYYY')}</p>
                </div>
                <div className="w-[50%] ml-2">
                  <h3 className="mb-1 font-bold">Date of Death</h3>
                  <p>{moment(item?.dateOfDeath).format('MMMM Do YYYY')}</p>
                </div>
              </div>
              <h3 className="mb-1 mt-2 font-bold">
                {
                  item.did_this_child_die_leaving_any_children_or_grandchildren
                    .question
                }
              </h3>
              <div className="space-x-2">
                {item.did_this_child_die_leaving_any_children_or_grandchildren.options
                  .filter((item) => item.value === true)
                  .map((item, i) => (
                    <label key={i} className="inline-block">
                      <input
                        type="radio"
                        checked={item.value}
                        onChange={() => {}}
                        className="form-radio ml-2 h-5 w-5 text-blue-500"
                      />
                      <span className="ml-1 text-gray-700 relative top-[-3px]">
                        {item.label}
                      </span>
                    </label>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <h1 className="mt-3 text-3xl font-bold text-center">
        SUCCESSOR TRUSTEES
      </h1>
      <h3 className="font-bold text-center">
        These are the individuals that will act as your replacement Trustee,
        should you become unable to act for yourself
      </h3>
      <p className="text-center">
        If you name more than one, you can have them act alone, in the order you
        name them, or you can have them act together as co-successor Trustees.
      </p>

      <h3 className="mb-1 mt-2 font-bold">
        {/* How many successor Trustees do you want to name? */}
        {
          data.personalInfo.how_many_successor_Trustees_do_you_want_to_name
            .question
        }
      </h3>
      <div className="space-y-2">
        {data.personalInfo.deceasedChildren.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label className="inline-block">
              <input
                type="radio"
                checked={item.value}
                onChange={() => {}}
                className="form-radio ml-2 h-5 w-5 text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>

      {data.personalInfo.how_many_successor_Trustees_do_you_want_to_name
        .options[0].value && (
        <div>
          <h3 className="mb-1 mt-2 font-bold">Successor Trustee</h3>
          <p>
            <strong>First Name:</strong>
            &nbsp;{data?.personalInfo?.successorTrustee?.firstName}&nbsp;
            <strong>Middle Name:</strong>
            &nbsp;{data?.personalInfo?.successorTrustee?.middleName}&nbsp;
            <strong>Last Name:</strong>
            &nbsp;{data?.personalInfo?.successorTrustee?.lastName}&nbsp;
          </p>
          <h3 className="mb-1 mt-2 font-bold">Address</h3>
          <p>
            <strong>Address Line 1:</strong>
            &nbsp;{data?.personalInfo?.successorTrustee?.addressLine1} <br />
            <strong>Address Line 2:</strong>
            &nbsp;{data?.personalInfo?.successorTrustee?.addressLine2} <br />
            <strong>City:</strong>
            &nbsp;{data?.personalInfo?.successorTrustee?.city} <br />
            <strong>State:</strong>
            &nbsp;{data?.personalInfo?.successorTrustee?.state?.label} <br />
            <strong>Zip Code:</strong>
            &nbsp;{data?.personalInfo?.successorTrustee?.zipCode} <br />
            <strong>Email:</strong>
            &nbsp;{data?.personalInfo?.successorTrustee?.email} <br />
            <strong>Phone:</strong>
            &nbsp;{data?.personalInfo?.successorTrustee?.phone} <br />
          </p>
        </div>
      )}
      {data.personalInfo.how_many_successor_Trustees_do_you_want_to_name
        .options[1].value && (
        <div>
          <h3 className="mb-1 mt-3 font-bold">Successor Trustees</h3>
          {data.personalInfo.successorTrustees.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                <span className="font-bold">Successor Trustee {i + 1}</span>
              </div>
              <h3 className="mb-1 font-bold">Name</h3>
              <p>
                <strong>First Name:</strong>
                &nbsp;{item?.firstName}&nbsp;
                <strong>Middle Name:</strong>
                &nbsp;{item?.middleName}&nbsp;
                <strong>Last Name:</strong>
                &nbsp;{item?.lastName}&nbsp;
              </p>
              <p>
                <strong>Email:</strong>
                &nbsp;{item?.email}&nbsp;
                <strong>Phone:</strong>
                &nbsp;{item?.phone}
              </p>
            </div>
          ))}
        </div>
      )}
      <h3 className="mb-1 mt-2 font-bold">
        {/* Is there anyone that you do not want serving as a successor Trustee? */}
        {
          data.personalInfo
            .is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee
            .question
        }
      </h3>
      <div className="space-y-2">
        {data.personalInfo.is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label className="inline-block">
              <input
                type="radio"
                checked={item.value}
                onChange={() => {}}
                className="form-radio ml-2 h-5 w-5 text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>
      <h1 className="m-y-2 text-3xl text-center font-bold">
        TRUST ADMINISTRATION ON YOUR DEATH
      </h1>
      <h3 className="m-y-2 text-lg text-center font-bold">
        Upon your death, three things will happen with your trust estate
      </h3>
      <ol className="list-decimal list-inside">
        <li>
          Your trust property will be marshaled, inventoried, and all remaining
          expenses and taxes will be paid.
        </li>
        <li>Special distributions (if any) will be made;</li>
        <li>
          Lastly, the remaineder of your trust property will be distributed.
        </li>
      </ol>
      <h3 className="mt-5 text-lg text-center font-bold">
        THE FOLLOWING SECTIONS PROVIDE INSTRUCTIONS REGARDING THE DISTRIBUTIONS
      </h3>
      <h3 className="mt-5 text-lg text-center font-bold">
        SPECIFIC DISTRIBUTIONS
      </h3>
      <h3 className="mt-5 font-bold">
        {/* Do you want to make any specific gifts? */}
        {data.personalInfo.do_you_want_to_make_any_specific_gifts.question}
      </h3>
      <div className="space-y-2">
        {data.personalInfo.do_you_want_to_make_any_specific_gifts.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label className="inline-block">
              <input
                type="radio"
                checked={item.value}
                onChange={() => {}}
                className="form-radio ml-2 h-5 w-5 text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>
      {data.personalInfo.do_you_want_to_make_any_specific_gifts.options[0]
        .value && (
        <div>
          {data.personalInfo.gifts.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                <span className="font-bold">Gift {i + 1}</span>
              </div>
              <div className="mb-2 flex">
                <div className="w-[50%]">
                  <h3 className="mb-1 font-bold">Type of Gift</h3>
                  <p>{item?.giftType}</p>
                </div>
              </div>
              <div className="mb-2 flex">
                <div className="w-full">
                  <h3 className="mb-1 font-bold">Name of Individual</h3>
                  <p>{item?.nameOfIndividual}</p>
                </div>
              </div>
              <div className="mb-2 flex">
                <div className="w-[50%]">
                  <h3 className="mb-1 font-bold">Type of Gift</h3>
                  <div className="space-x-2">
                    {item.typeOfGift.map((item, i) => (
                      <label className="inline-block">
                        <input
                          type="radio"
                          checked={item.value}
                          onChange={() => {}}
                          className="form-radio ml-2 h-5 w-5 text-blue-500"
                        />
                        <span className="ml-1 text-gray-700 relative top-[-3px]">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                {item.typeOfGift[0].value && (
                  <div className="w-[50%]">
                    <h3 className="mb-1 font-bold">Cash Gift Amount</h3>
                    <p>{item?.cashGiftAmount}</p>
                  </div>
                )}
              </div>
              {item.typeOfGift[1].value && (
                <div className="mb-2 flex">
                  <div className="w-full">
                    <h3 className="mb-1 font-bold">
                      Describe the item of personal property
                    </h3>
                    <p>{item?.describeTheItemOfPersonalProperty}</p>
                  </div>
                </div>
              )}
              <div className="mb-2 flex">
                <div className="w-full">
                  <h3 className="mb-1 font-bold">
                    Make any comments, remarks or your reason for the gift
                    (Optional)
                  </h3>
                  <p>{item?.makeAnyCommentsRemarksOrYourReasonForTheGift}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3 className="mt-5 text-lg text-center font-bold">
        DISTRIBUTION OF THE RESIDUE
      </h3>
      <p>
        Any remaining assets will be distributed as you specifiy in this
        section.{' '}
      </p>
      <p>
        We advise you to use percentages (not specific dollar amounts). This
        will make things much easier to administer when the time comes.
      </p>
      <h3 className="mt-5 font-bold">
        {/* First, do you want to make any charitable donations? */}
        {
          data.personalInfo.first_do_you_want_to_make_any_charitable_donations
            .question
        }
      </h3>
      <div className="space-x-2">
        {data.personalInfo.first_do_you_want_to_make_any_charitable_donations.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label className="inline-block">
              <input
                type="radio"
                checked={item.value}
                onChange={() => {}}
                className="form-radio ml-2 h-5 w-5 text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>
      {data.personalInfo.first_do_you_want_to_make_any_charitable_donations
        .options[0].value && (
        <>
          <div>
            <h3 className="font-bold mb-3">Charitable Donations</h3>
            {data.personalInfo.charitableDonations1.map((item, i) => (
              <div
                key={i}
                className={`${
                  i % 2 === 0 ? 'bg-slate-200' : ''
                } p-5 rounded-lg mb-3`}
              >
                <div>
                  <span className="font-bold">Charity {i + 1}</span>
                </div>
                <div className="mb-2 flex">
                  <div className="w-[50%] mr-2">
                    <h3 className="mb-1 font-bold">Name of Charity</h3>
                    <p>{item?.nameOfCharity}</p>
                  </div>
                  <div className="w-[50%]">
                    <h3 className="mb-1 font-bold">Percentage of Residue</h3>
                    <p>{item?.percentageOfResidue}</p>
                  </div>
                </div>
                <div className="mb-2">
                  <h3 className="mb-1 font-bold">Charity's Address</h3>
                  <p>
                    <strong>Address Line 1:</strong>&nbsp;{item?.addressLine1}
                  </p>
                </div>
                <div className="mb-2">
                  <p>
                    <strong>Address Line 2:</strong>&nbsp;{item?.addressLine2}
                  </p>
                </div>
                <div className="mb-2 flex">
                  <p>
                    <strong>City:</strong>&nbsp;{item?.city}
                  </p>
                  <p>
                    <strong>State:</strong>&nbsp;{item?.state.label}
                  </p>
                  <p>
                    <strong>zipCode:</strong>&nbsp;{item?.zipCode}
                  </p>
                </div>
                <div className="mb-2 flex">
                  <div className="w-full">
                    <h3 className="mb-1 font-bold">Purpose for the gift</h3>
                    <p>{item?.purposeForTheGift}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <h1 className="mt-5 font-bold">REMAINDER BENEFICIARIES</h1>
      <i className="mt-2">Remember - the total must add up to 100%</i>
      <div className="mt-3">
        {data.personalInfo.beneficiaries.map((item, i) => (
          <div
            key={i}
            className={`${
              i % 2 === 0 ? 'bg-slate-200' : ''
            } p-5 rounded-lg mb-3`}
          >
            <div>
              <span className="font-bold">Beneficiary {i + 1}</span>
            </div>
            <h3 className="mb-1 font-bold">Name</h3>
            <p>
              <strong>First Name:</strong>&nbsp;{item?.firstName}&nbsp;
              <strong>Last Name:</strong>&nbsp;{item?.lastName}&nbsp;
            </p>
            <h3 className="mb-1 font-bold">
              City and State where beneficiary lives
            </h3>
            <p>
              <strong>City:</strong>&nbsp;{item?.city}&nbsp;
              <strong>State:</strong>&nbsp;{item?.state?.label}
            </p>
            <div className="mb-2 flex">
              <div className="w-[70%] mr-2">
                <h3 className="mb-1 font-bold">
                  Beneficiary's relationship to you
                </h3>
                <p>{item?.Beneficiary_relationship_to_you}</p>
              </div>
              <div className="w-[30%]">
                <h3 className="mb-1 font-bold">Percentage Share</h3>
                <p>{item?.percentageShare}</p>
              </div>
            </div>
            <div className="mb-2 flex">
              <div className="w-full">
                <h3 className="mb-1 font-bold">
                  Any statements that you wish to make (optional)
                </h3>
                <p>{item?.any_statements_that_you_wish_to_make}</p>
              </div>
            </div>
            <div className="mb-2 flex">
              <div className="w-full">
                <h3 className="mb-1 mt-3 font-bold">Gift Structure</h3>
                <h3 className="mb-1 mt-3 font-bold">
                  What happens if this person predeceases you?
                </h3>
                <div className="space-x-2">
                  {item.what_happens_if_this_person_predeceases_you
                    .filter((item) => item.value === true)
                    .map((item, i) => (
                      <label className="inline-block">
                        <input
                          type="radio"
                          checked={item.value}
                          onChange={() => {}}
                          className="form-radio ml-2 h-5 w-5 text-blue-500"
                        />
                        <span className="ml-1 text-gray-700 relative top-[-3px]">
                          {item.label}
                        </span>
                      </label>
                    ))}
                </div>
              </div>
            </div>
            <div className="mb-1 flex">
              <div className="w-full">
                <h3 className="mb-1 font-bold">
                  Will this beneficiary's share be given outright,distributed at
                  certain time intervals, or held in trust for his or her life
                </h3>
                <p>{item?.will_this_beneficiarys_share_be_given_outright}</p>
              </div>
            </div>
            <i>
              If a beneficiary is going to receive a sizable amount of money,
              you may want to have their share held in trust.
            </i>
            <p>
              Doing this will protect the gift (asset protection) and guard
              against judgement creditors, or possible divorce attachment)
            </p>

            <div className="mb-1 mt-3 flex">
              <div className="w-full">
                <h3 className="mb-1 font-bold">
                  Pick your age for disbursement
                </h3>
                <p>{item?.pick_your_age_for_disbursement}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="mt-5 font-bold">Contingent Residue Beneficiaries</h3>
      <p className="text-sm">
        Should there be no one to receive your trust residue, where would you
        like it to be distributed?{' '}
      </p>
      <p className="mt-3 text-sm">
        if you identify more than one contingent residue beneficiary, the
        allocation to each will be an equal share.
      </p>
      <h3 className="mt-5 font-bold">Contingent Residue Distribution</h3>
      <div className="space-x-2">
        {data.personalInfo.contingent_Residue_Distribution
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label className="inline-block">
              <input
                type="radio"
                checked={item.value}
                onChange={() => {}}
                className="form-radio ml-2 h-5 w-5 text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>
      {data.personalInfo.contingent_Residue_Distribution[1].value && (
        <div className="mt-3">
          {data.personalInfo.beneficiaries1.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                <span className="font-bold">Beneficiary {i + 1}</span>
              </div>
              <h3 className="mb-1 font-bold">Name</h3>
              <p>
                <strong>First Name:</strong>&nbsp;{item?.firstName}&nbsp;
                <strong>Last Name:</strong>&nbsp;{item?.lastName}&nbsp;
              </p>
              <h3 className="mb-1 font-bold">
                City and State where beneficiary lives
              </h3>
              <p>
                <strong>City:</strong>&nbsp;{item?.city}&nbsp;
                <strong>State:</strong>&nbsp;{item?.state?.label}
              </p>
              <div className="mb-2 flex">
                <div className="w-[70%] mr-2">
                  <h3 className="mb-1 font-bold">
                    Beneficiary's relationship to you
                  </h3>
                  <p>{item?.Beneficiary_relationship_to_you}</p>
                </div>
                <div className="w-[30%]">
                  <h3 className="mb-1 font-bold">Percentage Share</h3>
                  <p>{item?.percentageShare}</p>
                </div>
              </div>
              <div className="mb-2 flex">
                <div className="w-full">
                  <h3 className="mb-1 font-bold">
                    Any statements that you wish to make (optional)
                  </h3>
                  <p>{item?.any_statements_that_you_wish_to_make}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {data.personalInfo.contingent_Residue_Distribution[2].value && (
        <div>
          <h3 className="font-bold mb-3">Charitable Donations</h3>
          {data.personalInfo.charitableDonations.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                <span className="font-bold">Charity {i + 1}</span>
              </div>
              <div className="mb-2 flex">
                <div className="w-[50%] mr-2">
                  <h3 className="mb-1 font-bold">Name of Charity</h3>
                  <p>{item?.nameOfCharity}</p>
                </div>
                <div className="w-[50%]">
                  <h3 className="mb-1 font-bold">Percentage of Residue</h3>
                  <p>{item?.percentageOfResidue}</p>
                </div>
              </div>
              <div className="mb-2">
                <h3 className="mb-1 font-bold">Charity's Address</h3>
                <p>
                  <strong>Address Line 1:</strong>
                  {item?.addressLine1}
                </p>
                <p>
                  <strong>Address Line 2:</strong>
                  {item?.addressLine2}
                </p>
              </div>
              <p>
                <strong>City:</strong>&nbsp;
                {item?.city}&nbsp;
                <strong>State:</strong>&nbsp;{item?.state?.label}&nbsp;
                <strong>zipCode:</strong>&nbsp;{item?.zipCode}&nbsp;
              </p>
              <div className="mb-2 flex">
                <div className="w-full">
                  <h3 className="mb-1 font-bold">Purpose for the gift</h3>
                  <p>{item?.purposeForTheGift}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* <Step21
        step={step}
        setStep={setStep}
        data={data}
        setData={setData}
        notActionBtns
      /> */}
      <h1 className="font-bold text-2xl text-center">POUR-OVER-WILL</h1>
      <p className="text-center mt-3">
        When you have a living trust, your last will and testament serves as a
        safeguard just in case you forget to transfer an asset that you intended
        to be a trust asset but are in a position (incacitated or dead) where
        you can no longer transfer the asset yourself.
      </p>
      <h3 className="font-bold mt-3 text-center">Personal Representatives</h3>
      <p className="mt-3">
        Your Personal representative is the individual who will probate your
        estate upon your death. You can name as many personal representatives as
        you want, each of whom will act in succession if the predecessor cannot
        serve.{' '}
      </p>
      <p className="font-[300] mt-3">[HYPER LINK TO WHAT IS PROBATE]</p>
      <h3 className="font-bold mt-3">
        Do you want the personal representative(s) under your Pour-Over-Will to
        be the same as your successor trustee(s)
      </h3>
      <div className="space-x-2">
        {data.documentMenu.personalRepresentativeQ.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label className="inline-block">
              <input
                type="radio"
                checked={item.value}
                onChange={() => {}}
                className="form-radio ml-2 h-5 w-5 text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>
      <p className="mt-2">
        Having the same personal representative and trustee makes logical sense
        and is rarely a different person.
      </p>
      <p>
        If you answer "No" and if you name more than one personal
        representative, they will act in the order listed below.
      </p>
      {data.documentMenu.personalRepresentativeQ.options[1].value && (
        <div>
          {data.documentMenu.personalRepresentatives.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                <span className="font-bold">
                  Personal Representative {i + 1}
                </span>
              </div>
              <h3 className="mb-1 mt-3 font-bold">Name</h3>
              <div className="mb-2 flex">
                <div className="w-[50%] mr-2">
                  <p>
                    <strong>First Name: </strong>
                    {item?.firstName}
                  </p>
                </div>
                <div className="w-[50%]">
                  <p>
                    <strong>Last Name: </strong>
                    {item?.lastName}
                  </p>
                </div>
              </div>
              <div className="mb-2 flex">
                <div className="w-[50%] mr-2">
                  <h3 className="mb-1 font-bold">Email</h3>
                  <p>
                    <strong>Email: </strong>
                    {item?.email}
                  </p>
                </div>
                <div className="w-[50%]">
                  <h3 className="mb-1 font-bold">Phone</h3>
                  <p>
                    <strong>Phone: </strong>
                    {item?.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* <Step31
        step={step}
        setStep={setStep}
        data={data}
        setData={setData}
        notActionBtns
      /> */}
      <h1 className="font-bold text-2xl text-center">
        DURABLE POWER OF ATTORNEY
      </h1>
      <p className="text-center mt-3">
        If you become unavailable to make financial decisions for yourself, who
        would you want to make decisions for you with regard to your property.
        Frequently, the primary Agent (called your "attorney-in-fact") is the
        same person as your successor Trustee (the manager for your Trust) and
        your Personal Representative (the manager for your Will).
      </p>
      <h3 className="font-bold mt-5">
        Do you want the attorney(s)-in-fact under your Durable Power of Attorney
        to be the same as your successor trustee(s)
      </h3>
      <div className="space-x-2">
        {data.preliminaryTrustInfo.question.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label key={i} className="inline-block">
              <input
                type="radio"
                checked={item.value}
                onChange={() => {}}
                className="form-radio ml-2 h-5 w-5 text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>
      <p className="mt-2">
        Having the same attorney-in-fact and trustee makes logical sense and is
        rarely a different person.
      </p>
      {data.preliminaryTrustInfo.question.options[1].value && (
        <div>
          {data.preliminaryTrustInfo.attorneyInFacts.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                <span className="font-bold">Attorney-in-Fact {i + 1}</span>
              </div>
              <h3 className="mb-1 mt-3 font-bold">Name</h3>
              <div className="mb-2 flex">
                <div className="w-[50%] mr-2">
                  <p>
                    <strong>First Name:</strong>&nbsp;{item?.firstName}
                  </p>
                </div>
                <div className="w-[50%]">
                  <p>
                    <strong>Last Name:</strong>&nbsp;{item?.lastName}
                  </p>
                </div>
              </div>
              <div className="mb-2 flex">
                <div className="w-[50%] mr-2">
                  <h3 className="mb-1 font-bold">Email</h3>
                  <p>
                    <strong>Email:</strong>&nbsp;{item?.email}
                  </p>
                </div>
                <div className="w-[50%]">
                  <h3 className="mb-1 font-bold">Phone</h3>
                  <p>
                    <strong>Phone:</strong>&nbsp;{item?.phone}
                  </p>
                </div>
              </div>
              <div className="mb-2 flex">
                <div className="w-[50%] mr-2">
                  <h3 className="mb-1 font-bold">Relationship</h3>
                  <p>
                    <strong>Relationship:</strong>&nbsp;{item?.relationship}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* <Step41
        step={step}
        setStep={setStep}
        data={data}
        setData={setData}
        notActionBtns
      /> */}
      <h1 className="font-bold text-2xl text-center">
        ADVANCE HEALTH CARE DIRECTIVE
      </h1>
      <p className="text-center mt-3">
        This is where you will nomiate a "health care agent" to make medical
        decisions on your behalf including decisions regarding medical consents,
        life support issues, and nursing home admission if you were unable to
        make these decisions yourself.
      </p>
      <p className="text-center mt-3 mb-3">
        It is not necessary to appoint the same person who is your successor
        trustee or personal representative as your health care agent.
      </p>
      <div>
        {data.familyInfo.healthCareAgents.map((item, i) => (
          <div
            key={i}
            className={`${
              i % 2 === 0 ? 'bg-slate-200' : ''
            } p-5 rounded-lg mb-3`}
          >
            <div>
              <span className="font-bold">Health Care Agent {i + 1}</span>
            </div>
            <h3 className="mb-1 mt-3 font-bold">Name</h3>
            <div className="mb-2 flex">
              <div className="w-[50%] mr-2">
                <p>
                  <strong>First Name:</strong>&nbsp;{item?.firstName}
                </p>
              </div>
              <div className="w-[50%]">
                <p>
                  <strong>Last Name:</strong>&nbsp;{item?.lastName}
                </p>
              </div>
            </div>
            <div className="mb-2 flex">
              <div className="w-[50%] mr-2">
                <h3 className="mb-1 font-bold">Email</h3>
                <p>
                  <strong>Email:</strong>&nbsp;{item?.email}
                </p>
              </div>
              <div className="w-[50%]">
                <h3 className="mb-1 font-bold">Phone</h3>
                <p>
                  <strong>Phone:</strong>&nbsp;{item?.phone}
                </p>
              </div>
            </div>
            <div className="mb-2 flex">
              <div className="w-[50%] mr-2">
                <h3 className="mb-1 font-bold">Relationship</h3>
                <p>
                  <strong>Relationship:</strong>&nbsp;{item?.relationship}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Step51
        step={step}
        setStep={setStep}
        data={data}
        setData={setData}
        notActionBtns
        /> */}
      <h1 className="font-bold text-2xl text-center">
        HIPAA AUTHORIZATION AND WAIVER
      </h1>
      <p className="text-center mt-3">
        The individuals that you identify in this document (called HIPAA
        Agents), will be able to receive what is otherwise federally protected
        health care information about you. This can be as simple as what your
        prognosis is, or what room you are in at the hospital, etc.
      </p>
      <h3 className="font-bold mt-5">
        Are there individuals that you want to identify as your HIPAA agents?
      </h3>
      <div className="space-x-2">
        {data.successorTrustees.question.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label key={i} className="inline-block">
              <input
                type="radio"
                checked={item.value}
                onChange={() => {}}
                className="form-radio ml-2 h-5 w-5 text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>
      {data.successorTrustees.question.options[0].value && (
        <div>
          <h3 className="font-bold mt-5 mb-3">HIPAA Agents</h3>
          {data.successorTrustees.hIPAAAgents.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                <span className="font-bold">HIPAA Agent {i + 1}</span>
              </div>
              <h3 className="mb-1 mt-3 font-bold">Name</h3>
              <div className="mb-2 flex">
                <div className="w-[50%] mr-2">
                  <p>
                    <strong>First Name: </strong>
                    {item?.firstName}
                  </p>
                </div>
                <div className="w-[50%]">
                  <p>
                    <strong>First Name: </strong>
                    {item?.lastName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* <Step61
        step={step}
        setStep={setStep}
        data={data}
        setData={setData}
        notActionBtns
      /> */}
      <h1 className="font-bold text-2xl text-center">
        GUARDIAN FOR MINOR CHILDREN
      </h1>
      <h3 className="font-bold mt-5">
        Do you have any children under 18 years of age?
      </h3>
      <div className="space-x-2">
        {data.specialDistributions.question1.options
          .filter((item) => item.value === true)
          .map((item, i) => (
            <label key={i} className="inline-block">
              <input
                type="radio"
                checked={item.value}
                onChange={() => {}}
                className="form-radio ml-2 h-5 w-5 text-blue-500"
              />
              <span className="ml-1 text-gray-700 relative top-[-3px]">
                {item.label}
              </span>
            </label>
          ))}
      </div>
      {data.specialDistributions.question1.options[0].value && (
        <div>
          <h1 className="text-xl mt-5 font-bold text-center">
            If you have any children under the age of 18 you should name a
            guardian (or co-Guardians) to take care of them if you cannot.
            Failure to make arrangements in this regard will leave the decision
            up to the government.
          </h1>
          <h3 className="font-bold mt-5">
            Do you want to name a guardian for your minor child or minor
            children?
          </h3>
          <div className="space-x-2">
            {data.specialDistributions.question2.options
              .filter((item) => item.value === true)
              .map((item, i) => (
                <label key={i} className="inline-block">
                  <input
                    type="radio"
                    checked={item.value}
                    onChange={() => {}}
                    className="form-radio ml-2 h-5 w-5 text-blue-500"
                  />
                  <span className="ml-1 text-gray-700 relative top-[-3px]">
                    {item.label}
                  </span>
                </label>
              ))}
          </div>
          {data.specialDistributions.question2.options[0].value && (
            <div>
              <h3 className="font-bold mt-5">
                Do you want to nominate an individual or a couple as Guardian of
                your minor child or children?
              </h3>
              <div className="space-x-2">
                {data.specialDistributions.question3.options
                  .filter((item) => item.value === true)
                  .map((item, i) => (
                    <label key={i} className="inline-block">
                      <input
                        type="radio"
                        checked={item.value}
                        onChange={() => {}}
                        className="form-radio ml-2 h-5 w-5 text-blue-500"
                      />
                      <span className="ml-1 text-gray-700 relative top-[-3px]">
                        {item.label}
                      </span>
                    </label>
                  ))}
              </div>
              {data.specialDistributions.question3.options[0].value && (
                <div>
                  <h1 className="text-xl text-center font-bold mt-5">
                    SINGLE GUARDIANS
                  </h1>
                  <p className="mt-3 mb-5">
                    Name as many guardians as you want. Each one named will act
                    in succession if the prior guardian cannot or will not
                    serve.
                  </p>
                  <div>
                    {data.specialDistributions.guardians.map((item, i) => (
                      <div
                        key={i}
                        className={`${
                          i % 2 === 0 ? 'bg-slate-200' : ''
                        } p-5 rounded-lg mb-3`}
                      >
                        <div>
                          <span className="font-bold">Guardian {i + 1}</span>
                        </div>
                        <h3 className="mb-1 mt-3 font-bold">Name</h3>
                        <div className="mb-2 flex">
                          <div className="w-[50%] mr-2">
                            <p>
                              <strong>First Name: </strong>
                              {item?.firstName}
                            </p>
                          </div>
                          <div className="w-[50%]">
                            <p>
                              <strong>Last Name: </strong>
                              {item?.lastName}
                            </p>
                          </div>
                        </div>
                        <h3 className="mb-1 mt-3 font-bold">
                          Relationship of Guardian to you
                        </h3>
                        <div className="mb-2">
                          <div className="w-full">
                            <p>{item?.relationship_of_Guardian_to_you}</p>
                          </div>
                        </div>
                        <h3 className="mb-1 mt-3 font-bold">
                          Guardian's Address
                        </h3>
                        <div className="mb-2">
                          <div className="w-full">
                            <p>
                              <strong>Address Line 1:</strong>
                              {item?.addressLine1}
                            </p>
                          </div>
                        </div>
                        <div className="mb-2">
                          <div className="w-full">
                            <p>
                              <strong>Address Line 2:</strong>
                              {item?.addressLine2}
                            </p>
                          </div>
                        </div>
                        <div className="mb-2 flex">
                          <p>
                            <strong>City:</strong>
                            {item?.city}
                          </p>
                          <p>
                            <strong>State:</strong>
                            {item?.state?.label}
                          </p>
                          <p>
                            <strong>zipCode:</strong>
                            {item?.zipCode}
                          </p>
                        </div>
                        <div className="mb-2 flex">
                          <div className="w-[50%] mr-2">
                            <h3 className="mb-1 font-bold">Email</h3>
                            <p>{item?.email}</p>
                          </div>
                          <div className="w-[50%]">
                            <h3 className="mb-1 font-bold">Phone</h3>
                            <p>{item?.phone}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {data.specialDistributions.question3.options[1].value && (
                <div>
                  <h3 className="font-bold mt-5">Co-Guardian Informations</h3>
                  <h3 className="mb-1 mt-3 font-bold">Co Guardian One</h3>
                  <div className="mb-2 flex">
                    <div className="w-[50%] mr-2">
                      <p>
                        <strong>First Name:</strong>
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.co_Guardian_One_First_Name
                        }
                      </p>
                    </div>
                    <div className="w-[50%]">
                      <p>
                        <strong>Last Name:</strong>
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.co_Guardian_One_Last_Name
                        }
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <h3 className="mb-1 font-bold">
                      Relationship of co-Guardian One to you
                    </h3>
                    <div className="w-full">
                      <p>
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.relationship_of_co_Guardian_One_to_you
                        }
                      </p>
                    </div>
                  </div>
                  <h3 className="mb-1 mt-3 font-bold">Co-Guardian Two</h3>
                  <div className="mb-2 flex">
                    <div className="w-[50%] mr-2">
                      <p>
                        <strong>First Name:</strong>
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.co_Guardian_Two_First_Name
                        }
                      </p>
                    </div>
                    <div className="w-[50%]">
                      <p>
                        <strong>Last Name:</strong>
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.co_Guardian_Two_Last_Name
                        }
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <h3 className="mb-1 font-bold">
                      Relationship of co-Guardian Two to you
                    </h3>
                    <div className="w-full">
                      <p>
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.relationship_of_co_Guardian_Two_to_you
                        }
                      </p>
                    </div>
                  </div>
                  <h3 className="mb-1 mt-3 font-bold">Co Guardian's Address</h3>
                  <div className="mb-2">
                    <div className="w-full">
                      <p>
                        <strong>Address Line 1:</strong>
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.addressLine1
                        }
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="w-full">
                      <p>
                        <strong>Address Line 2:</strong>
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.addressLine2
                        }
                      </p>
                    </div>
                  </div>
                  <div className="mb-2 flex">
                    <p>
                      <strong>City:</strong>
                      {data.specialDistributions.co_GuardianInformation?.city}
                    </p>
                    <p>
                      <strong>State:</strong>
                      {
                        data.specialDistributions.co_GuardianInformation?.state
                          ?.label
                      }
                    </p>
                    <p>
                      <strong>zipCode:</strong>
                      {
                        data.specialDistributions.co_GuardianInformation
                          ?.zipCode
                      }
                    </p>
                  </div>
                  <div className="mb-2 flex">
                    <div className="w-[50%] mr-2">
                      <h3 className="mb-1 font-bold">Email</h3>
                      <p>
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.email
                        }
                      </p>
                    </div>
                    <div className="w-[50%]">
                      <h3 className="mb-1 font-bold">Phone</h3>
                      <p>
                        {
                          data.specialDistributions.co_GuardianInformation
                            ?.phone
                        }
                      </p>
                    </div>
                  </div>
                  <h3 className="font-bold mt-5">
                    Which co Guardian has priority should the couple divorce or
                    otherwise split up?
                  </h3>
                  <div className="space-x-2">
                    {data.specialDistributions.question4.options
                      .filter((item) => item.value === true)
                      .map((item, i) => (
                        <label key={i} className="inline-block">
                          <input
                            type="radio"
                            checked={item.value}
                            onChange={() => {}}
                            className="form-radio ml-2 h-5 w-5 text-blue-500"
                          />
                          <span className="ml-1 text-gray-700 relative top-[-3px]">
                            {item.label}
                          </span>
                        </label>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {/* <Step71
        step={step}
        setStep={setStep}
        data={data}
        setData={setData}
        setPreviewOpen={setPreviewOpen}
        notActionBtns
      /> */}
      <h1 className="font-bold text-2xl text-center">
        LAST WILL AND TESTAMENT
      </h1>
      <p className="text-center mt-3">
        A last will and testament would be in lieu of a Living Trust.. There are
        some fairly significant differences however.
      </p>
      <h3 className="text-center font-bold mt-3 mb-3">
        INSERT TABLE SHOWING DIFFERENCES
      </h3>
      <h2 className="text-center font-bold mt-5 mb-3">
        Personal Representatives
      </h2>
      <p className="mt-5 mb-3">
        Your Personal representative is the individual who will probate your
        estate upon your death. You can name as many as you want, each of whom
        will act in succession if the predecessor cannot serve.{' '}
      </p>
      <div>
        {data?.remainingDistributions?.personalRepresentatives.map(
          (item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                <span className="font-bold">
                  Personal Representative {i + 1}
                </span>
              </div>
              <h3 className="mb-1 mt-3 font-bold">Name</h3>
              <div className="mb-2 flex">
                <div className="w-[50%] mr-2">
                  <p>
                    <strong>First Name: </strong>
                    {item?.firstName}
                  </p>
                </div>
                <div className="w-[50%]">
                  <p>
                    <strong>Last Name: </strong>
                    {item?.lastName}
                  </p>
                </div>
              </div>
              <div className="mb-2 flex">
                <div className="w-[50%] mr-2">
                  <h3 className="mb-1 font-bold">Email</h3>
                  <p>{item?.email}</p>
                </div>
                <div className="w-[50%]">
                  <h3 className="mb-1 font-bold">Phone</h3>
                  <p>{item?.phone}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex justify-end">
        <button
          class={`bg-[#CCCCCC] text-white font-bold py-2 px-4 rounded disabled`}
          onClick={() => setPreviewOpen(false)}
        >
          Back
        </button>
        <button
          class="bg-[#6E66D4] ml-2 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
    // <div className="absolute top-0 left-0 bg-white w-full z-[100]">
    //   <div className="flex justify-end h-[60px] items-center px-5">
    //     <div>
    //       <button
    //         class={`bg-[#CCCCCC] text-white font-bold py-2 px-4 rounded disabled`}
    //         onClick={() => setPreviewOpen(false)}
    //       >
    //         Back
    //       </button>
    //       <button
    //         class="bg-[#6E66D4] ml-2 text-white font-bold py-2 px-4 rounded"
    //         onClick={() => handleSubmit()}
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </div>

    //   <div
    //     className="flex justify-center"
    //     ref={pdfContainerRef}
    //     style={{ height: 'calc(100vh - 60px)' }}
    //   >
    //     <div className="xs:block sm:hidden">
    //       <button class="bg-[#6E66D4] ml-2 mt-20 text-white font-bold py-2 px-4 rounded">
    //         <PDFDownloadLink document={<MyPdfDocument />} fileName="gmLaw.pdf">
    //           {({ _blob, _url, loading, _error }) =>
    //             loading ? 'Loading document...' : 'Download Preview'
    //           }
    //         </PDFDownloadLink>
    //       </button>
    //     </div>
    //     <div className="xs:hidden sm:block">
    //       <PDFViewer width={'100%'} height={'auto'}>
    //         <MyPdfDocument />
    //       </PDFViewer>
    //     </div>
    //   </div>
    // </div>
  );
};

export default FormDataPreview;
