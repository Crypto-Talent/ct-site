import * as React from "react"
import Seo from "../components/seo/seo.component"
import Layout from "../components/layout/layout.component";
import * as styles from "./home.module.scss"
import { classes } from "../utils/styles.util";

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Home"
        description="Centralized place for decentralized talent"
      />
      <div className={styles.home}>
        <div className="row flex-grow-1 m-0">
          <div
            className={classes(
              "col-md-6 d-flex align-items-center justify-content-center",
              styles.puzzlePiece
            )}
          >
            <div className={styles.content}>
              <b><h2>For Companies</h2></b>
              <a href="https://docs.google.com/forms/d/1wDQdtn-TOZ9Ku_CKzRNPkKL3roXh6uzKWm3txVt-4ts/viewform" target="_blank" rel="noopener noreferrer">
                <div className={classes(styles.actionButton, styles.actionButtonBusinesses)}>
                  Submit job posting
                </div>
              </a>
            </div>
          </div>
          <div
            className={classes(
              "col-md-6 d-flex align-items-center justify-content-center",
              styles.puzzlePiece
            )}
          >
            <div className={styles.puzzleTab}></div>
            <div className={styles.content}>
              <b><h2>For Talents</h2></b>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_pKbi0CPnlMbGkr6VwaqJdn7ABt0OP9ylXurGQTUIoqLc8A/viewform" target="_blank" rel="noopener noreferrer">
                <div className={classes(styles.actionButton, styles.actionButtonTalents)}>
                  Send your CV
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
