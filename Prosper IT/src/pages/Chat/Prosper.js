import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  UncontrolledAlert,
  UncontrolledTooltip,
} from "reactstrap"

// emoji
import EmojiPicker from "emoji-picker-react"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

// simple bar
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

import {
  deleteMessage as onDeleteMessage,
  addMessage as onAddMessage,
  getChats as onGetChats,
  getContacts as onGetContacts,
  getGroups as onGetGroups,
  getMessages as onGetMessages,
} from "store/actions"

//redux
import { useSelector, useDispatch } from "react-redux"
import { createSelector } from "reselect"
import Spinners from "components/Common/Spinner"
import openAI from "./OpenAI"

const Prosper = () => {
  //meta title
  document.title = "Prosper | Prosper iT"

  const dispatch = useDispatch()

  const ChatProperties = createSelector(
    state => state.chat,
    Chat => ({
      chats: Chat.chats,
      groups: Chat.groups,
      contacts: Chat.contacts,
      messages: Chat.messages,
      loading: Chat.loading,
    })
  )

  const { messages, loading } = useSelector(ChatProperties)

  const [messagesData, setMessagesData] = useState([])
  const [isLoading, setLoading] = useState(loading)
  // const Chat_Box_Username2 = "Henry Wells"
  const [currentRoomId, setCurrentRoomId] = useState(1)
  const [emoji, setEmoji] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [curMessage, setCurMessage] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  const [isdisable, setDisable] = useState(false)

  // Fonction pour envoyer les messages
  const sendMessageToOpenAI = async (promptMessage) => {
    console.log('key', process.env.REACT_APP_OPENAI_SECRET);
    console.log('hello', promptMessage);
    try {
      const response = await openAI.post('/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{
          role: "user",
          content: promptMessage
        }],
      });
      console.log('response', response);
      const messageFromAI = response.data.choices[0].message.content;
      console.log("Réponse d'OpenAI:", messageFromAI);

      setMessagesData((currentMessages) => [
        ...currentMessages,
        {
          id: Math.floor(Math.random() * 10000),
          to_id: 1,
          msg: messageFromAI,
          isSameTime: false, 
          images: null,
          time: new Date().toLocaleTimeString(),
        },
      ]);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message à OpenAI: ", error);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current.getScrollElement();
      scrollElement.scrollTop = scrollElement.scrollHeight;
    }
  }, [messagesData]);
  


  // Function to handle sending messages when "Envoyer" button is clicked
  const handleSendMessage = (message) => {
    if (typeof message === "string" && message.trim() !== "") {
      const newMessage = {
        id: Math.floor(Math.random() * 10000),
        to_id: 2,
        msg: message,
        isSameTime: false,
        images: null,
        time: new Date().toLocaleTimeString(),
      };
  
      setMessagesData((currentMessages) => [...currentMessages, newMessage]);
  
      sendMessageToOpenAI(message);
    }
  };
  
  

  useEffect(() => {
    dispatch(onGetChats())
    dispatch(onGetGroups())
    dispatch(onGetContacts())
    dispatch(onGetMessages(currentRoomId))
  }, [onGetChats, onGetGroups, onGetContacts, onGetMessages, currentRoomId])

  useEffect(() => {
    const a = (messages || []).find(i => i.id)
    const a1 = a?.usermessages[a?.usermessages.length - 2]
    const a2 = a?.usermessages[a?.usermessages.length - 1]
    if (a2?.isSameTime) {
      setMessagesData(
        (messages || []).map(item => {
          const updateMessage = item.usermessages.filter(data =>
            a2.time === a1.time
              ? {
                  ...data,
                  id: a1.id,
                  to_id: data.to_id,
                  msg: data.msg,
                  isSameTime: a1.time === a2.time,
                  images: data.images,
                  time: (a1.time = 0),
                }
              : { ...item }
          )
          return { ...item, usermessages: updateMessage }
        })
      )
    } else {
      setMessagesData(messages)
    }
  }, [messages])

  const currentTime = new Date()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const time = `${hours}: ${minutes}`
  const addMessage = () => {
    if (curMessage !== "" || selectedImage !== null) {
      const newMessage = {
        id: Math.floor(Math.random() * 100),
        to_id: 2,
        msg: curMessage,
        isSameTime: true,
        images: selectedImage,
        time: time,
      }
      dispatch(onAddMessage(newMessage))
      setCurMessage("")
      setDisable(false)
      setEmoji(false)
      setSelectedImage(null)
      if (scrollRef.current) {
        scrollRef.current.getScrollElement().scrollTop =
          scrollRef.current.getScrollElement().scrollHeight
      }
    }
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); 
      handleSendMessage(curMessage);
      setCurMessage("");
    }
  };
  

  const [copyMsgAlert, setCopyMsgAlert] = useState(false)
  const copyMsg = ele => {
    var copyText = ele
      .closest(".conversation-list")
      .querySelector("p").innerHTML
    navigator.clipboard.writeText(copyText)
    setCopyMsgAlert(true)
    if (copyText) {
      setTimeout(() => {
        setCopyMsgAlert(false)
      }, 1000)
    }
  }

  // scroll simple bar
  const scrollRef = useRef(null)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.getScrollElement().scrollTop =
        scrollRef.current.getScrollElement().scrollHeight
    }
  }, [messagesData])

  // emoji
  const [emojiArray, setEmojiArray] = useState("")
  const onEmojiClick = (event, emojiObject) => {
    setEmojiArray([...emojiArray, emojiObject.emoji])
    setCurMessage(curMessage + event.emoji)
    setDisable(true)
  }

  //  img upload
  const handleImageChange = event => {
    event.preventDefault()
    let reader = new FileReader()
    let file = event.target.files[0]
    reader.onloadend = () => {
      setSelectedImage(reader.result)
      setDisable(true)
    }
    reader.readAsDataURL(file)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Prosper IT" breadcrumbItem="Prosper" />

          <Row>
            <Col lg="12">
              <div className="d-lg-flex">
                <div className="w-100 user-chat">
                  <Card>
                    <div>
                      <div className="chat-conversation p-3">
                        <SimpleBar ref={scrollRef} style={{ height: "486px" }}>
                          {isLoading ? (
                            <Spinners setLoading={setLoading} />
                          ) : (
                            <ul className="list-unstyled mb-0" id="users-conversation">
                            {messagesData.map((message, index) => (
                              <li key={index} className={message.to_id === 1 ? "" : "right"}>
                                <div className="conversation-list">
                                  
                                    {/* Conditionnellement afficher le nom "Vous" et les détails du message */}
                                    
                                    {messagesData.length > 0 && index !== 0 && (
                                      <div className="ctext-wrap">
                                      <>
                                        <div className="conversation-name">
                                          {message.to_id === 1 ? "Propser" : "Vous"}
                                        </div>
                                        <p>{message.msg}</p>
                                        <p className="chat-time mb-0">
                                          <i className="bx bx-time-five align-middle me-1"></i>{message.time}
                                        </p>
                                      </>
                                      </div>
                                    )}
                                  
                                </div>
                              </li>
                            ))}
                          </ul>
                          
                          
                          )}
                        </SimpleBar>
                      </div>
                      {selectedImage && (
                        <div className="replymessage-block mb-0 d-flex align-items-start">
                          <div className="flex-grow-1">
                            <img
                              src={selectedImage}
                              alt="select img"
                              style={{ width: "150px", height: "auto" }}
                            />
                          </div>
                          <div className="flex-shrink-0">
                            <button
                              type="button"
                              id="close_toggle"
                              className="btn btn-sm btn-link mt-n2 me-n3 fs-18"
                              onClick={() => setSelectedImage(null)}
                            >
                              <i className="bx bx-x align-middle"></i>
                            </button>
                          </div>
                        </div>
                      )}

                      {copyMsgAlert && (
                        <UncontrolledAlert color="warning" role="alert">
                          {" "}
                          Message copied
                        </UncontrolledAlert>
                      )}
                      {emoji && (
                        <EmojiPicker
                          onEmojiClick={onEmojiClick}
                          width={250}
                          height={382}
                        />
                      )}

                      <div className="chat-input-fixed">
                        <Row>
                          <Col>
                            <div className="position-relative">
                              <input
                                type="text"
                                value={curMessage}
                                onKeyPress={onKeyPress}
                                onChange={e => {
                                  setCurMessage(e.target.value)
                                  setDisable(true)
                                }}
                                className="form-control chat-input"
                                placeholder="Enter Message..."
                              />
                              <div className="chat-input-links">
                                <ul className="list-inline mb-0">
                                  <li
                                    className="list-inline-item"
                                    onClick={() => setEmoji(!emoji)}
                                  >
                                    <Link to="#">
                                      <i
                                        className="mdi mdi-emoticon-happy-outline me-1"
                                        id="Emojitooltip"
                                      />
                                      <UncontrolledTooltip
                                        placement="top"
                                        target="Emojitooltip"
                                      >
                                        Emojis
                                      </UncontrolledTooltip>
                                    </Link>
                                  </li>
                                  <li className="list-inline-item">
                                    <label
                                      htmlFor="imageInput"
                                      style={{ color: "#3991e0", fontSize: 16 }}
                                    >
                                      <i
                                        className="mdi mdi-file-image-outline me-1"
                                        id="Imagetooltip"
                                      />
                                      <UncontrolledTooltip
                                        placement="top"
                                        target="Imagetooltip"
                                      >
                                        Images
                                      </UncontrolledTooltip>
                                    </label>
                                    <input
                                      type="file"
                                      id="imageInput"
                                      className="d-none"
                                      onChange={handleImageChange}
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <Link to="#">
                                      <i
                                        className="mdi mdi-file-document-outline"
                                        id="Filetooltip"
                                      />
                                      <UncontrolledTooltip
                                        placement="top"
                                        target="Filetooltip"
                                      >
                                        Add Files
                                      </UncontrolledTooltip>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Col>
                          <Col className="col-auto" style={{ marginInline: "23px" }}>
                            <Button
                              type="button"
                              color="primary"
                              disabled={!isdisable}
                              onClick={() => {handleSendMessage(curMessage),setCurMessage("")}}
                              className="btn btn-primary btn-rounded chat-send w-md"
                            >
                              <span className="d-none d-sm-inline-block me-2">
                                Envoyer
                              </span>{" "}
                              <i className="mdi mdi-send" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Prosper.propTypes = {
  chats: PropTypes.array,
  groups: PropTypes.array,
  contacts: PropTypes.array,
  messages: PropTypes.array,
  onGetChats: PropTypes.func,
  onGetGroups: PropTypes.func,
  onGetContacts: PropTypes.func,
  onGetMessages: PropTypes.func,
  onAddMessage: PropTypes.func,
}

export default Prosper
