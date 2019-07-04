terragrunt = {
  terraform {
    source = "git@github.com:Advanon/advanon-infrastructure.git//terraform/modules/cicd/serverless?ref=tags/v0.1.17"
  }
}

project_name = "aws-access-utils"
pr_build_only = "true"
