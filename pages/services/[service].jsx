import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { servicesData } from "../../data/servicesData";
import parse from "html-react-parser";
import Head from "next/head";

export default function Services() {
  const [service, setService] = useState([]);
  const { query } = useRouter();
  let serviceId = query.service;
  useEffect(() => {
    var data = servicesData.filter((serviceObj) => serviceObj.id === serviceId);
    if (data.length) {
      setService({ ...data[0] });
    }
    console.log(serviceId, data);
  }, [query]);

  useEffect(() => {
    console.log(service);
  }, [service]);

  function ServiceContainer({ subService }) {
    console.log(parse(subService.description));
    return (
      <div class="entry clearfix flex">
        <div class="w-[30%]">
          <img src="../images/services/1.png" alt="image" className="w-full" />
        </div>
        <div class="content-post flex-1 pl-6">
          <h4 class="title-post">{subService.heading}</h4>
          <div class="entry-post">
            <p>{parse(subService.description)}</p>
          </div>
          {/* <div class="submit-wrap">
            <button class="flat-button button-style">
              Read More <i class="fa fa-chevron-right"></i>
            </button>
          </div> */}
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{service.title}</title>
      </Head>
      <section class="main-content padding-small">
        <div class="container">
          <div class="flat-services">
            <div class="row">
              <div class="col-md-12">
                <div class="title-section style2">
                  <h3 class="title">{service.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="flat-services-control">
                <div class="col-md-3">
                  <div class="sidebar-services">
                    <div class="list-services">
                      <ul class="services">
                        <li>
                          <Link href="/services/ManpowerServices">
                            Manpower Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/HumanResourceManagement">
                            Human Resource Management
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/BusinessConsultancy">
                            Business Consultancy
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/SecurityServices">
                            Security Services Risk
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/Profiling">Profiling</Link>
                        </li>
                        <li>
                          <Link href="/services/RiskAuditAnalysis">
                            Risk Audit &amp; Analysis
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/LearningDevelopment">
                            Learning &amp; Development Event Organiser
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sidebar-services mt-12">
                    <div class="list-services">
                      <ul class="services">
                        <li className="rounded-lg bg-green-200">
                          <Link href="/services/LearningDevelopment">
                            Corporates Login/Signup
                          </Link>
                        </li>
                        <li className="rounded-lg bg-blue-200">
                          <Link href="/services/LearningDevelopment">
                            Individuals Login/Signup
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-md-9">
                  <div class="content-services">
                    <div class="thumb">
                      <img src="../images/services/s.png" alt="image" />
                    </div>
                    <div class="post v1">
                      <h4 class="title">{service.subHeading} </h4>
                      <p>
                        At Cosine we've earned a reputation for providing sales
                        people with the insights they need to dominate in
                        today's hyper-competitive selling climate.
                      </p>
                      <p>
                        F&amp;O is a research based sales training, sales
                        coaching and sales consulting firm that is the leader in
                        the integration of proven science and sales. Based in
                        New York, United States, we study the scientific
                        disciplines of social psycholo-gy, communication theory,
                        cognitive psychology, social neuroscience, cognitive
                        neuroscience and behavioral eco-nomics. We then take the
                        repeatable and predictable principles, which science has
                        proven to create and enable influence, out of the
                        laboratory and academic journals and apply them to
                        selling.
                      </p>
                    </div>

                    {/* <div class="post v2">
                      <div class="list-post">
                        <a href="corporate-login.html">
                          <h5 class="title" style={{ color: "#18ba60" }}>
                            Corporates Login
                          </h5>
                        </a>
                      </div>
                      <div class="list-post v1">
                        <a href="individual-login.html">
                          <h5 class="title" style={{ color: "#18ba60" }}>
                            Individuals Login
                          </h5>
                        </a>
                      </div>
                    </div> */}
                    {/* <div class="post v2">
                      <div class="list-post">
                        <a href="corporate-signup.html">
                          <h5 class="title" style={{ color: "#18ba60" }}>
                            Corporates Signup
                          </h5>
                        </a>
                      </div>
                      <div class="list-post v1">
                        <a href="individual-signup.html">
                          <h5 class="title" style={{ color: "#18ba60" }}>
                            Individuals Signup
                          </h5>
                        </a>
                      </div>
                    </div> */}
                  </div>
                  <div class="post-wrap blog-v2 ">
                    {service.services?.map((subService, key) => (
                      <ServiceContainer key={key} subService={subService} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
