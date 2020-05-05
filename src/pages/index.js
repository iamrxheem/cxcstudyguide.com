import React from "react"
import { Link } from "gatsby"

import {
  Alert,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Container,
  Button
} from "shards-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "react-bootstrap/Carousel"

import { Tab, Tabs } from "react-bootstrap"
import YouTube from "react-youtube"
import uuid from "uuid"

// React device detect
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

const opts = {
  height: "170",
  width: "300",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
}

const Page = () => (
  <>
    <Layout>
      <SEO title="Home" description="" />

      <br />
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active></BreadcrumbItem>
        </Breadcrumb>

        <MobileView>
          <Carousel>
            <Carousel.Item>
              <a href="/study/csec/mathematics/">
                <img
                  style={{ height: "220px" }}
                  className="d-block w-100"
                  src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                  alt="Third slide"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "220px" }}
                className="d-block w-100"
                src="https://pregonesprtt.org/wp-content/uploads/2019/05/Tempest2019.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "220px" }}
                className="d-block w-100"
                src="data:image/jpeg;base64,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"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "220px" }}
                className="d-block w-100"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhMSExMTFRUSFxUVEBUVFRIQEBUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGislHR8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABDEAABAwIEAggDAwoEBwEAAAABAAIDBBEFEiExBlETIkFhcYGRoRQysVLB0QcWIzNCU2JykvAVNILhQ1SToqPC0iT/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAtEQACAgEDAwIEBgMAAAAAAAAAAQIRAxIhMQQTUTJBFCJCoQUjUmFx8DNDgf/aAAwDAQACEQMRAD8A67hLLMCF8TVG4RakcBGNUncSVd5LKcDJbAiN1y/z+iXMUf8AQ/VG4JNX+f0S5izSSB5peqW8TdP9Qxw4k6OEAHsSfimIufe5RarntG0dyWKh65+kT+a/J1ZdnEomY33KkjmPMqm46qVjkZHbBlozuuNTuE9YXC4iJxLgTYtH7NjzHgCkGBhc9o79fAbroWChuYSAgtLQGa320Nx2ELR3dEuoY9OroWBj5DlzubFnvltc5gCewdUqLjuAno3MNsxAJ3uG9drfMhVsFrgXdC5mbpHDKbZmtIa7ceGyKcXU4lpra6ZXWHVdoQbDkn+qRx1VCdisuYE82/chXCNKOmuva2r60jc18hLb3vp2a/3stuEalolF10RdxElBo7JEy0QHck6vZ+kKaIq8GPcbJXqJQ55K8j8Ufyr+T0vw5Pdl6Efo1zfj6QhzSDY3XSGSDot1y/8AKHJq3xXp9Mvy0ebmd5GKdVWSO3cSEX4V+bzQYi4RnhYdbzXJ13oZ6XRvY7Tgn6oKri5vYd6s4M4dCNVTr9ZGi/ak6X/Ec/U+ph/Chla1CeJKnWyLMeGtGqS8YrM0rhyXowOJJtFHDHXef5kSr0GwmSzj4o7XAZd1y/iauNFug2l/0Xa/EHNjcAUg1dU4km6Z8alsHC6TJ3KHSpqDs7p13CwypdzK9kqHcyqkbl7I5V3svaoYeFKhxkFyd11mll6q47wo79IPFdVil6nkuqHB5ufeQ3YJPdqzHDoEG4Yq73F0axsgt37E5ztCVVzdd3ivFQrJeu7XtWLB0Mjj47Zk+ZLVbxJ0jybrnzZFv0ilujqiooeYcWu4C+5sjuMUw6OJ3NpSHgguWeK6LjP+Xg8HfRS6lu4iRildCVjdblyD+EIO6oBUnFLtY/5AgokKbHGlaKqS9wgStmlUOkK9EpQcCyypDFgbGlzy4loDDYgZjc7ADvRKlxZrOq06NvqdCTzQ3CHtjic94JzNc4W0sdmFL3SFCCabElJSZ0rCcZc2OpqGu1p+iLdbC8ji3Me4fejXEfFbY7MzWL445AL3sJGh1r9u51SFwLUOM/w9mOZUjLI14JaejvI06dt2+604xm6XEJQC0sYRHDltlETAMjR3AFaLfca/v95Emky9UC8bXsc030c0aOB3uee+6goquSF2YjRGMFo26aXykZ+4OAsR5pjxXh8FugQWRxdCN2B6bitxGUOU9JWvJvc6q3gfBzRmJbuj1JgjWOAsqZMEMnqH6fO4vSgRLUyhhSFj0kkzrW2XdKnCGFmw2ShNgLc+gTN6EooRqLk5HKPhXjcKfDavoynrHcHDVz3FG5XuHIqWaClszpwT+XYfcO4wa1gbm2UU/FzcwOYaLl7ptVsJk0MSjGkRk1J7nXJeNmlmjuxLb8dzuLr7pI6ZeRzXcB3qiFSjFDzT4ib6FW6ziSzbE7KnhtICB4IVjcYaXJskFPkljlpexHWYnnJPNUXaoaJluJ1JY64OpZC80LctVBs69NQl7ZRZgth0+RwKbWY+MvzLnzJlKZEybWwjUZbj9hHFPRu1KM4hxuxzbBy5GXFeBNqEeOLdjlNjV3E33WJSAWJdbKaEM1Fwvc/KrcvCOma3snvDGDMdkQqYhkOio2zkT2ObUmDZLG1tUwYv/lof9X0U2MAANtzCixf/AC0Xi76Lmz/SMnYoT4T0wjNr6fgicXCIIAy+yJcOW6Nn99idqeMWCvF/KhTmT+Ex8tkKqOHrG1l1iaMZilzFYRZ5u1unzONgAd/NK21uPFp7CrUUz5AyIts1rQGAAC7W7HvVSrwKzdkewgdcC9wL5fDuRjFIh0Z8FsPBs21CLwfII5pgSAX007Iyf3jm9UDkTa3mrHEeGGCSiD25ZH04M7Tqc4e8a+VvJUqHD3TVUUTALueL3Nm5W9Z1zyygq5xRMZqz4kC0c3VZvoYmtaWm+x2Nv4krVZQ3cRkwiJxezI4NzNIdcZmuy6gEJ6Y4SQsktbMBccjsQkLBXHIbbt6w56b28rp1wKS9MG3uGucGHe7b3aT32KnKtZKLuIw4QwZdlFM39IFawtvVVKof+kHiuxC4vUGJh1PJLjm9dMUp6nkgDvnUsvKHjwwFxKxclxSO8rx3rrHEz9Vy6qH6Z3ilycI6el3TK9Bg2c7IkOHL20R3hyEX8kysiAI0TwexHNSkKDeEgQBl37lA7hYA2y7LqUMQ0Q6oiGY6ItsW6Yv4bh9hZDcawnNfTdM4NrqF9jdMmycnuJuHcLXF8qtP4RAGbLv3J8wiMZVcqohlGiVtj3Ryqr4aDdbboVU4PlI03XUcVjFholfEWDOFN3RaDUmA6fArC9t0JxOlyOsum0sIyDwSPxY0Z1RK0JqqVC0V61eFbtCRl0SBYvQsSFTrWGVXWOqK1FaMh1XL4eIcru5SzcSl3VbfVUm37HLHGq3G+vd0oAb2G58kaPDb5qeMZmttci53uEh0E0jtiRfREcRoniFknTSXuW2zHS3JcWSbk6TKSxaFZaiw50ADSQchsSCmSkrBpquVT4kYWsOdx6S5Nze9lfh4gcW3aHFdePVp3JaUP764ZzqlrFalrnEa2bd19xmsct+5LT8dffW9yVLiWKdUjKG7C+uZx3JN1KTldFo44pIvYNN+ktyujWIzgsOqQ6fES03V2XGri11XHKuQZ8epqirhuJ/DVMc5bmEZJcOYILT7FFuI6eOmZSUTXue5hfPmLcoDJ2MLRftNwfRBKOASzRRuNmySMY4jcBzgCR5FFuIYS7pJif8AKTfCC5JJYDJkv3gNtftuklJOaYO1SoNcNSAFF8IqhG8sF8rjlvazcwJ+5IVFi4Z2otTYyLCzcwcb3uQWuHaFHKnrsnjxtXZ2LDK0ZbAqjUVIMg8Vzmh4ry3F1q7imzs2btXcnsLix1Pc7K54yb9iByPGbdKY42Zk+ZC/zua4k5ks9xnDkL8Uz6rnUzv0rj3oni2N9IdCgr3a3Ucr9js6bGoxsbOHpxfyR3p+sLFc+ocRyFE/8a2sVTHKluQzY9UtjpdNVDTVA8Q4kp43EOkbe+zbvd/27eaU8WxhpjDXk9cXsCWi38RGpHcEtDF2Md1Q2w7A3L73ufVGvJPRuPNTxO2/UikfftOVo+8qI4xMR1YLX73O+gCTZ+L5NmWZ/K1oPrZVncT1DtnyHwLj9E9g7a9zo2GcSPYQ17YwO27nNcPC6ap8RY5rS1wI5g3XCWYnUfNaQ8yWuPvZMeA4s/o3B18xcLX8DfT0Syug6Ex/xWrGmvYlivqBnHgpWU08ouEDxMSRu6/YpPVpLQjDVsxyp5xkGvYkfip5Mitw4yLalDK6fObqmuok1hbnYFutmuVl7AvAxJqLaaNA5eKx0axLY9HR6/glol0Gl0Y/MhgaDl9ky4n+tHimAC7B4J9Tcmjgnskcxgwtsb8qr4wP/wAze6RyYcXjtMgWMM/QNHOQ+68qG2ZnoZ3eKLEiLDxK6AHYX+q6nhPCjHRjqjbkubB5hMZPZcH1XZOEMSD4QSRoLlezj9KPKnycy4m4WLJbsbfKC62gGnikfHa17nMY43MbbaeN/Ndn4vp31OXo4yI3E2edA6wNrjsaT2rjOJYa4SEHcGxSNXK/BaEqQML1416PMwC7dlPR8KlxtYpkrKawCycggg6ggjxGybuKawigpxaPNVSGedwFnuIF4yT/AKpLqF/B5OwPemHGcJM3xLrdQxRmMD5GZSzIG/ZsCRYcypZElJGc7OXFyNcN1rmucxtuuO0Xt4clKMDuDcKfC+H3dI3LoScvIaqk4pxYsclsD4pC6ORzXixvf11VUOTfivDZDgHXNzkDt9Rt5INV4LkuO0IQVofuU9wVdela21Wy1Dpk1MrU5sFVpVf+HLtFGXqOmHoBJnN1I2col/gJPNX6LhYuGx0XRptHEp7i1WtfK8uLmgBupccrWhoQ0Rt2Ac8/0t/FOWIYHHCM8rg1vI6k+A7UPjwyWa7oKeVzOYb0MFv53EB3qjwC7/gFRUzy3RsLBzcWhx/qNyp4aY7fEgdzGvd9G/eug4B+TerkYH5qOAHY5HVUvo6wHqmej/JffSXEKo8+hbFTt8gQ5I8q8gbijjsNE64vJUAX3yyBtvX7kwYXTPdP1g4tBDWuOt2jRpJHaQF0av8AyY0bQ0l9U831L53X/wC0AKNnAVNG/PE6drmguF5TI05dcpDwdD3WKyzRA2mthmwTCGmLsXO/yn0gjYSOa67hEdogub/lRoc7bd6rRCL3OPskWOmKPUfDRcbaqxLwiSdAUmk6u5SFXpSVIHEJjm4TLRexVQYSskK8gJ6crERdgp714tpG7h9AY42zr96M0T7xhAcZqg4kIjhM92BS+tkZelAjiGLrgpT4muKa43D7hPOPR3F0mcQtvAR/GvOarqGd0neCIqupDJAxxOpBv7o7wvW5YJIi612OaD4iwQ+B7RAwE6a29Sg8GK9FM0g9UmxXs4leM83J6zr0/EkBgyNa/M1oaGlpab2sLX3Hek5/CwcGl0jb261tddyj1TgkVfSkxgMma28T29Qk75XW3BXGcVrJg8tzyNtoW53aEaHt5rmydxOr+xbFCMuDqcOHxAZc1/JGcNwM3zBu/OwXEafHaxgsyqnA5ZyR7qyOJMQ/5yo/rUvzFxIt2X7HdhgbuTde9Af8Kc2qkpzG21Qc8bu6GMEn1lIXJ/zixD/naj/qFQuxitzCQ1M2cXs/NZ4zABwuOeUeiDU3yzdlnXKrhnowcwNj26FVDhrCCGus7Qi4tqFyifHKt2jqqoPO8sn4qqKybtmlt2/pH/imSn+o3ao7dVMY5gDhZzC11tNSOwFKnEEYuSW5SRexsT7IXwDhhkcZ5i5zWnqNcS657N/XzRLiGcFzgF0YlK92QyUjnbz1j4n6ra6hmd1j4n6rM6MjojwXaVMODxgkeKW6MpkwZ1nDxXPL1HT/AK2N9PSN00TBhFG3KdEvxVI0VmHiBsTXaXI1dc5WtHZc9/JdSWx5kXvRfxHBIHPZK+NrnMa9rM3WDbkG4adL6HXdZELxEcroNTcVdNPFFYNDs2l7kmxA7NO1GKI/OFz5VUiseBh4TlvFblojUR1SxwjJYvbyKZAdVGXIrR5irbsPcht9WHyPnoi9W27D4JfdO0M1c0EHtIGyIsOBkoR1GpS4xhB35prw992XHM++v3pR4wmA35rtu0iPDBmEUjc23YinwjbnRBMIrBnPkiza0XK0ti3MSPEqVoYdEoQQAl3imvE6sdGdUl01UOt4pYck3wExSN5LFG2tCxPpCplWXikue4k7lGcF4va0ZS7Vc4raBzTqSg1S9zToSlcFdlbT2Z3DE+KmZfmCE4tVB1OT/ECuRired3H1Tu+svTBvcCuPJhqeo6HO4aSCurg2CO/N31KWqqfNtpbVXcSkvBGOTj96F5l1Qb00Iox5Z1rgHicNjDSbEbobxphlG5zpmucx7iXEAhzSTvodktcNUjnDME1DAS4ZnaqmnUtyLkoStHPzA0bP9W/7rZsWbTO0eRTXWcFvkd1dAoq7gF7G3F7+aTtIsuoQsvpAP+I33WGn0+ceQKnlwGQXGtwrFJhbhoUscdhlmoDMoATcud931RKjw5khykkjt2CJTYYdNN0b4X4bNy519dlTtUT+IRapKUxxBrNGjzPqlfGqhzSb9q6f/h4bGQVzrjelPVyi5JR0+BFlTe6FMgErcMCu0eASu1dZo7zZXhh9NFrI/OeV7BTeJs6Fnj4BdNHc6D0R2ionixNmjm7T2VCfieKMWiYB4D70FnxqonOVuY32DQSUO0uWxn1DapIcqrGoohvmPebD0Sni+OOkz5TYOLSQNL5dkRwzgCrmGeQiNp59d58ht6rTFuFBCMt3HvOh9E6km6RB/LyB8HxZwqYJCT1JGE/y5xm9rrplfxpTwyPy3fv25G+p19kiYNgIzjcnv7PBXeI+COii6YS6XAcHjXW+xG502shKKctzLZWEGflOfG9zo2sbfld59Tp7KjX/AJUqyTaRw8CWH/x5UqMom22JPfZo9NSiApWtAs2K/wDqcfO7gPZbTFDKLfCNqvjKqk0c7N/MOkPq+5VelrZ3mw3PJo/DRFYKZ7hoHeDI229Qy/urVHSyMIuJBfQ5zZljoRY67IpxG7c0dH/J3ij6emLJZWuLnZmgfsiw0J7ShfGfEjXGwPalM4PMJCIpLxk9XK7M4A9jgRfzRGbgaQtzlziUzW1nPtq3I8PxmxJvurcvENu1Lk2EujNjfRFqDC8wBskXzlZSUNmiWt4hu210EixPfxTTLw2SNt1Ri4Bke47gdyZY64E7kH7AwYr3rFfl4DkBIudFibc1w8BDEaPpDfZBKnhfN2pibIeS36VQUpI7O1j8Cs3hPvRMYVKGWDHOy6XAumGCic5pdbY6Aa3TdhOAMEZEjx1tRZ5afNc+XMJJwXByCLBXyNs4Ftj2rccLd6fa/BY2OyskFyb/ADZjbvuhNYeicQSMt7A3Twy2aOn3K2BUnQNy/wC6Y4cXAAaR7IGJQRcarwuVtcgvDjY20nEEbSLj2Vmv4hhcNBfySUH9y2utrkDswL0sjCSbbqmYR2LwL0FKrQzhFm3RXI7kxYdiTGDUWS+wqOveejdY2NtE2uQjw4/AZxniiMNIBCQsX4rZfSxI2SdW1MpeWkkm/kiWGcJzTWLiGA+ZVro5lDfYrYhxJI/Y2VWkoaioPVa437ToPVP+GcGU8di4Zz37Jgija0Wa0AdwspyyeC0cS9xHoOBbC8rrnkNkew3BhERlAFkac5aZlGVy5OuDUeAzS4kA2xCDY1TiYrdpWnxTL2zC/dqtCLi9iU4we7KeH4Z0b8yocZ4zFJlicNIydnAG+xzd2iPtkHNJPGPDJeX1ETjc6vjsXEnS5Zb1sqxTbtkpSglsBnVcLSLAOHfe31Vv87QwWijiZ3hgJ9SlCUhps4Pv2gjJ7HVeCqFrBjb8zdxT9sDz2NL+Naj94fKzfoqT8dneb3kcfM/cqWH01XJ+qjdbmGta3+pyZcM4OnOs02QdrWEud5nYe6OgTu+C7wTJUOnbI8OEY+cuB6w5NvvqurOx6LJa3sk7DaBkLMjL23Jc4uJPPX7lO4KUm+PYtGMHTb3IsWhbK4uAsvaQZAByWxK1JSQuPBWcIT5C8eKjS427kYouJIW7j2ScXLUuT65C9jGN8vEUJJNvZepNusQ1SN2MZoJO5V6mvY0hskbi07uYdQsy+K1e2/NK0mPJXsWcOxmlaf107Nb2LSR9F7XcRUrngl85y7EXA9EPNMPsqjPDY/KoyxJbiLGa1+JRdJnjdMeV9FM/EI3gBtO95vcl7urdVqanu7UIuyOw0FlSMExXBIlpZnWuWht9mjYKUznkq+UrwxlWUUG2iyKk8lt8SeSpiIrboSjpQHKRb+K7lnxfcqvQFbCFakLqkWm1fctKmYuaRbdatiW/R+KFINyEquoS11wERwrFns0OoRqopQexCZ8PsdAtxwNWrlDFTYhmGisfEnklaEuYi1JV33WtM2iS4CfxB5LBMeSr2uqldM5pa0aX+Y9oF7f2UNKZtTXJelqHOa4MA2IzH5b7diVpat0LiHxuFu1hzN9/xVqerfE+8buqf2TstajEmu/WRX77X9wnSSEty3s9p+IYu1xHi0/cq2KY2X9WOQAW7DY/Vathgk+XMDyzX9nLc8NE6tF/Fg/9SFm/BtKW7Qqz4WXm5zG/bq73UTcGI2zehTZ+a8n7lv8A5B/7LSTheT9z7vH4pbl5GrH+lAGnpJG7Zx3i4Rmirp2drnDkblbjheUf8J39R/8Alb/m1J+7PmXn6BFOXkGnH+kYKHFGubdxDD25jl+qlfi8Dd5o/JzXfRK7uF3drbeUh+9YMEaz5if6fxujfkTtr2DzuJob5WZ5HHYNabep+5XWVJOhbYjcfge1BsPyR6tY4nmbD6ItSY0y+VzRroe3RZpSDFuH8EvTHktTN3L3L2i9jstCwqTVHSpJq0e9L3LFp0ZXq1DX+xAYj3e34rDH/dv916ZjyPoFnTHv9ltzVE0eFSnYrb6k8j6KrJUnl7BJKwrSa00R5eyJRwnkhsVU7kfQK4yrd3+gTRsV6SyIDy+i96I8gofiXcj7LU1J7024KRYyeC2DFRNU7vXhq3fxLbgpF8MPcvRH4KgKw9/svWVp7+/+7rbmpBJsJ7lv0PgqTavvK3bVnv8AVC2bSiy6DwUEtJfkvRUm3b7Lbpj3rbmpFCaj8FW6EtRVziearSg/2VmmMmjyGUoPxNIQ5hB2buNDuUQcXDtQPH5DcE32smiTyVRDG2ZwJ6hs0PLS5okyE2zZe0X8dxzXkOIHLmDTlva4vlvyvtdWBAHgz3c0NhFi3IQdcrmOBHcCpaSJrqOWAZQ9jWVBbr0gLgc2YEdjSza+qGuiIOfXNd3Hwv8AREKDF3M2mHncBbw3npRH+2wRPaTuGukezU8gGn0XuJvjD8PEcMOSoDS8GMAuDnMaLkWN7OJ8Vlk3oL4CLeJn9k0fv+C0dxRU9joj5gfWyoVLadtdPFJDGIIm3JBmzCzGuLic+vzHs2HrTxDDmU8kzXRiRnRmWB+dzQW5mgDTQ/Pr4Dmj3LFUV4DbeKKrt6L+pn/0phxLUc4/Vv4pWqqWOnihdJGZJJwX2zmNjG2Fthcu6w7hroVUrhFmHRZspYw2cQ5wcR1mkgAaFMpWaldDZVcQzEfOweo+iDvxEk3dIw+BJXmGU8TqOoldEC+Eta055Gg5iNSGkbX9kPwyJpeC/wCRl5JdL9RgJPrY+dkNXP7B2SsJf4oLbnyH36qOOusczWOdbc7geJA+5WqGLocS6OzTFJqwFrXANeOqW3GlnaaclYxcvbTR5pHFzWugk1teRzmSagaaMDmpe7ul5DpLeCYjJO85iLBugGgGo8yUYMZSzwq+xdbl94TL0vimlZSDVUadGf7KxbiU96xJuU2In0o+19FE6kH2lZD/AA9Vo5/gktl9MfBTko2/aVd9C3n7q+4+CicfBByZu3HwVY6ID9oq02lFvmK8bfkp2k8llJm0R8EBpB9r6KN9K0ftFWy48lC4u5I6n5N24+Cs6mbzWvwzftFTm/JanNy+iGt+Q9uPgiFM37S26Bv2ltrysszHkFtb8m7cfBs2nbzPqp2U7eahbJ4KeJ/gtqZtEfBMylae1SikbzWrJPBWY335I2xHFeCMUjOajfSsPafQq8HeC9LvBHUxdK8Ap9C3mheIYa0pkcPBVJW+CDbGUY+BNkwUbtcR26Gy2iFQyR0jZGue5uRxexri5vIki5++w5BMs0HgoDFYHQaqbnNDdnG/YWzUztzBscTc0boiY8w6riTfU7gl39RW8mIgmlzU8rRSBoble1+ZrS0i9273aNe8oz0Pgt3RDq6BDvP3Qr6SPs2AcQxKGSaeYtnb07C0jo2PLXFobe+cXFmj1KiZjV6R9NI0kgAU7rahpcCWO5DTT07AmCWAXOgUfwwt2I95VVC/CV9X2AxxhsjacukfDLTjLnaC4PYbbZdQ6zdjob7rOIsXFTLnaXhgaAxrv2T+1YAkC9htyCMfCjTQLWWEA6ALLMl7B+Ed8/YF4fikLKWaB3TZpnNcSyNjg3KRtd4ve3uvKjEo8jmwMqY3FjI2v6rTZpzG5ab3cd7diMRU4y3sF6IeQC3e/YHwnl/YDVFW+T4ciNwfT2Ake8Oc8Ag9bQdo38Vs+OWQODyAHSPlIGvXfa/lojTYNRoFY+GuNgt3JeyHXTwXLIOH8OaLkndHPgWqOhjy9gV3N4KqlIVwinsip8Azn7rFbLvBeLamDTHwCTZa2BWLExk9zR1lFceCxYloNmzXDvWRznvCxYskBtm3SHmVG555lYsWYUyLOftKJzj9orFi1GbZ4L/aK3F1ixAKNwpYwsWIgstwlTtWLFgNkwuvc6xYiBnjnaKu96xYjQLIXSKGSQLFiVpDqTKrpR3rQz7LFik4oopsx0wJ7Vq6XxWLEtIfUzOl2Xkr1ixakbUyaF2llKwLxYqKKJuTJWKxGe5erE6SJuTLDHL0yL1YmoW2ah5XqxYsaz//2Q=="
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "220px" }}
                className="d-block w-100"
                src="https://horizonconsultz.com/cp/uploads/scholarship-1.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </MobileView>

        <br />
        <Row>
          <Col sm={12} md={8} lg={8}>
            <Tabs defaultActiveKey="spanish" id="home-tab">
              <Tab eventKey="spanish" title="Spanish">
                <br />

                <>
                  <div class="bulma-tabs">
                    <ul>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"ISMd8oShzrA"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"WvnBAQFsmu0"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"mQCnwMkmYLs"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"J1tQCJfVEVA"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"OoY4Vi8R-NY"} />
                      </li>
                    </ul>
                  </div>
                  <br />
                  <Button href="/study/csec/english-a/" theme="info">
                    See full course
                  </Button>
                </>
              </Tab>
              <Tab eventKey="mathematics" title="Mathematics">
                <br />
                <p></p>
                <>
                  <div class="bulma-tabs">
                    <ul>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"xYhX29gBybE"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"STcPmKc7JaI"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"oVvq81gf-sU"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"zTbg5fffPMc"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"uhn3IN-h44Y"} />
                      </li>
                    </ul>
                  </div>
                  <br />
                  <Button href="/study/csec/mathematics/" theme="info">
                    See full course
                  </Button>
                </>
              </Tab>
              <Tab eventKey="chemistry" title="Chemistry">
                <br />
                <br />

                <div class="bulma-tabs">
                  <ul>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={"j87n0OtxLCI"} />
                    </li>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={"HRz-jH4CAy8"} />
                    </li>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={"fN8kH9Vvqo0"} />
                    </li>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={"DM38Ht1vo0o"} />
                    </li>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={"7JZBUuaQlOA"} />
                    </li>
                  </ul>
                </div>
                <br />
                <Button href="/study/csec/chemistry/" theme="info">
                  See full course
                </Button>
              </Tab>
            </Tabs>
          </Col>

          <Col sm={12} md={4} lg={4}></Col>
        </Row>
      </Container>
    </Layout>
  </>
)

export default Page
