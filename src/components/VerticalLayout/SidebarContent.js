import React, { useEffect, useRef, useCallback, useState } from "react"
import { useLocation } from "react-router-dom"
import PropTypes from "prop-types"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import withRouter from "components/Common/withRouter"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const [userRole, setUserRole] = useState(null)

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("authUser"))
    const role = authUser ? authUser.role : null
    setUserRole(role)
  }, [])

  const ref = useRef()
  const activateParentDropdown = useCallback(item => {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]

    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }, [])

  const removeActivation = items => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i]
      const parent = items[i].parentElement

      if (item && item.classList.contains("active")) {
        item.classList.remove("active")
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.lenght && parent.childNodes[1]
            ? parent.childNodes[1]
            : null
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show")
        }

        parent.classList.remove("mm-active")
        const parent2 = parent.parentElement

        if (parent2) {
          parent2.classList.remove("mm-show")

          const parent3 = parent2.parentElement
          if (parent3) {
            parent3.classList.remove("mm-active") // li
            parent3.childNodes[0].classList.remove("mm-active")

            const parent4 = parent3.parentElement // ul
            if (parent4) {
              parent4.classList.remove("mm-show") // ul
              const parent5 = parent4.parentElement
              if (parent5) {
                parent5.classList.remove("mm-show") // li
                parent5.childNodes[0].classList.remove("mm-active") // a tag
              }
            }
          }
        }
      }
    }
  }

  const path = useLocation()
  const activeMenu = useCallback(() => {
    const pathName = path.pathname
    let matchingMenuItem = null
    const ul = document.getElementById("side-menu")
    const items = ul.getElementsByTagName("a")
    removeActivation(items)

    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  }, [path.pathname, activateParentDropdown])

  useEffect(() => {
    ref.current.recalculate()
  }, [])

  useEffect(() => {
    new MetisMenu("#side-menu")
    activeMenu()
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    activeMenu()
  }, [activeMenu])

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>

            <li>
              <Link to="/dashboard">
                <i className="fas fa-chart-bar"></i>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>

            <li>
              <Link to="/Prosper">
                <i className="bx bxs-magic-wand"></i>
                <span>{props.t("Prosper")}</span>
              </Link>
            </li>

            <li>
              <Link to="/projects-grid">
                <i className="bx bxs-folder-open"></i>
                <span>{props.t("Dossiers")}</span>
              </Link>
            </li>

            <li>
              <Link to="/chat">
                <i className="bx bxs-chat"></i>
                <span>{props.t("Messages")}</span>
              </Link>
            </li>

            <li>
              <Link to="/services">
                <i className="bx bxs-star"></i>
                <span>{props.t("Services")}</span>
              </Link>
            </li>

            {userRole === "admin" && (
              <>
                <li>
                  <Link to="/tables-datatable">
                    <i className="bx bxs-user-detail"></i>
                    <span>{props.t("Clients")}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/partenaires">
                    <i className="mdi mdi-handshake"></i>
                    <span>{props.t("Partenaires")}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contacts-list">
                    <i className="bx bxs-user-pin"></i>
                    <span>{props.t("Contacts")}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/calendar">
                    <i className="mdi mdi-calendar"></i>
                    <span>{props.t("Calendrier")}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/apps-filemanager">
                    <i className="mdi mdi-file-document-multiple"></i>
                    <span>{props.t("Documents")}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/email-inbox">
                    <i className="mdi mdi-email"></i>
                    <span>{props.t("Emails")}</span>
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link to="/pages-faqs">
                <i className="bx bxs-buoy"></i>
                <span>{props.t("Aide")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
