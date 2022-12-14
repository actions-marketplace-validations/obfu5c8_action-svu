import * as core from '@actions/core'
import {runActionAsync} from './action'

async function run(): Promise<void> {
  try {
    await runActionAsync()
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
    else core.setFailed(`Unknown error: ${error}`)
  }
}

run()
